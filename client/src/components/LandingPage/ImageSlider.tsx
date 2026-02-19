import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/landingpage/imageslider-img1.jpg";
import image2 from "../../assets/landingpage/imageslider-img2.jpg";
import image3 from "../../assets/landingpage/imageslider-img3.jpg";

const slides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({
    container: 0,
    cardW: 0,
    cardH: 0,
    activeLeft: 0,
    prevLeft: 0,
    nextLeft: 0,
  });

  const computeDims = () => {
    if (!containerRef.current) return;
    // Available width is the wrapper div's actual width
    const avail = containerRef.current.offsetWidth;

    // Card is ~68% of available space, side cards peek in from edges
    const cardW = Math.round(avail * 0.68);
    const cardH = Math.round(cardW * 1.01); // ~1:1 ratio like original
    const sideOffset = Math.round(avail * 0.0);        // prev card starts at left edge
    const activeLeft = Math.round((avail - cardW) / 2); // center the active card
    const nextLeft = avail - cardW;                      // next card flush to right edge

    setDims({
      container: avail,
      cardW,
      cardH,
      activeLeft,
      prevLeft: sideOffset,
      nextLeft,
    });
  };

  useEffect(() => {
    computeDims();
    const ro = new ResizeObserver(computeDims);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getSlideStyle = (index: number) => {
    const diff = (index - activeIndex + slides.length) % slides.length;

    if (diff === 0) {
      // Active — centered
      return {
        left: `${dims.activeLeft}px`,
        width: `${dims.cardW}px`,
        height: `${dims.cardH}px`,
        zIndex: 30,
        opacity: 1,
        transform: "scale(1)",
      };
    } else if (diff === slides.length - 1) {
      // Prev — peek from left
      return {
        left: `${dims.prevLeft}px`,
        width: `${dims.cardW}px`,
        height: `${dims.cardH}px`,
        zIndex: 20,
        opacity: 1,
        transform: "scale(0.95)",
      };
    } else if (diff === 1) {
      // Next — peek from right
      return {
        left: `${dims.nextLeft}px`,
        width: `${dims.cardW}px`,
        height: `${dims.cardH}px`,
        zIndex: 20,
        opacity: 1,
        transform: "scale(0.95)",
      };
    } else {
      return {
        left: `${dims.activeLeft}px`,
        width: `${dims.cardW}px`,
        height: `${dims.cardH}px`,
        zIndex: 10,
        opacity: 0,
        transform: "scale(0.85)",
      };
    }
  };

  return (
    // Outer wrapper fills whatever space the parent gives it
    <div ref={containerRef} className="w-full ">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: `${dims.container}px`,
          height: `${dims.cardH}px`,
        }}
        className="relative overflow-visible lg:ml-20 xl:ml-0"
      >
        {slides.map((slide, index) => {
          const style = getSlideStyle(index);
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              onClick={() => !isActive && setActiveIndex(index)}
              style={{
                position: "absolute",
                top: 0,
                maxHeight:550,
                maxWidth:500,
                left: style.left,
                width: style.width,
                height: style.height,
                borderRadius: "16px",
                border: isActive
                  ? "4px solid #b89a5a"
                  : "4px solid rgba(184,154,90,0.4)",
                overflow: "hidden",
                transform: style.transform,
                zIndex: style.zIndex,
                opacity: style.opacity,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: isActive ? "default" : "pointer",
                boxShadow: isActive
                  ? "0 24px 60px rgba(0,0,0,0.6)"
                  : "0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={slide.image}
                alt={`slide-${slide.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: isActive ? "none" : "brightness(0.5)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;