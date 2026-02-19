import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

// ─── Types ────────────────────────────────────────────────────────────────────

interface EnquireData {
  fullName: string
  email: string
  contactNumber: string
  message: string
}

interface MeetingData {
  fullName: string
  email: string
  contactNumber: string
  date: string   // YYYY-MM-DD from native picker
  time: string   // HH:MM from native picker
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const inputBase = [
  'w-full bg-[#5a5248]',
  'border border-[#7a7470] rounded-xl',
  'px-4 py-3 text-white',
  'font-old-standard text-sm',
  'focus:outline-none focus:border-[#CEA574]',
  'transition-all duration-200',
].join(' ')

const labelClass = 'font-old-standard sm:text-lg text-gray-300 block mb-1.5'
const errorClass = 'text-[#ff8a65] text-xs mt-1 font-old-standard'

const submitBtn = [
  'w-full bg-[#CEA574] hover:bg-[#b89a5a]',
  'text-[#2a2620] font-offside text-base font-medium',
  'py-3 rounded-full cursor-pointer',
  'transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
].join(' ')

// Individual display box — read-only, clicking opens the hidden picker
const DisplayBox = ({
  value,
  placeholder,
  width = 'w-14',
  onClick,
  hasError = false,
}: {
  value: string
  placeholder: string
  width?: string
  onClick: () => void
  hasError?: boolean
}) => (
  <button
    type='button'
    onClick={onClick}
    className={`
      ${width} py-2.5 text-center
      bg-[#5a5248] border rounded-lg
      font-old-standard text-sm
      transition-all duration-200 cursor-pointer select-none
      ${hasError ? 'border-[#ff8a65]' : 'border-[#7a7470] hover:border-[#CEA574]'}
      ${value ? 'text-white' : 'text-gray-500'}
    `}
  >
    {value || placeholder}
  </button>
)

// ─── Smart Date Picker Group ──────────────────────────────────────────────────
// Shows DD / MM / YYYY boxes. Clicking any box triggers the hidden date input.
// Once a date is picked from calendar, all three boxes fill automatically.
// Each box can also be clicked again to re-open calendar and change.

const DatePickerGroup = ({
  value,
  onChange,
  hasError,
}: {
  value: string
  onChange: (val: string) => void
  hasError?: boolean
}) => {
  const hiddenRef = useRef<HTMLInputElement>(null)

  const openPicker = () => {
    hiddenRef.current?.showPicker?.()
    hiddenRef.current?.click()
  }

  // Parse YYYY-MM-DD → DD, MM, YYYY
  const [yyyy, mm, dd] = value ? value.split('-') : ['', '', '']

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className='relative'>
      {/* Hidden native date input */}
      <input
        ref={hiddenRef}
        type='date'
        min={today}
        value={value}
        onChange={e => onChange(e.target.value)}
        className='absolute opacity-0 w-0 h-0 pointer-events-none'
        tabIndex={-1}
        style={{ colorScheme: 'dark' }}
      />

      {/* Three visible display boxes */}
      <div className='flex gap-2 items-center'>
        <DisplayBox
          value={dd}
          placeholder='DD'
          width='w-12'
          onClick={openPicker}
          hasError={hasError}
        />
        <DisplayBox
          value={mm}
          placeholder='MM'
          width='w-12'
          onClick={openPicker}
          hasError={hasError}
        />
        <DisplayBox
          value={yyyy}
          placeholder='YYYY'
          width='w-16'
          onClick={openPicker}
          hasError={hasError}
        />
      </div>
    </div>
  )
}

// ─── Smart Time Picker Group ──────────────────────────────────────────────────
// Shows HH / MM / AM-PM boxes. Clicking any box opens native time picker.
// Once time is picked, HH + MM fill, AM/PM is derived automatically.

const TimePickerGroup = ({
  value,
  onChange,
  hasError,
}: {
  value: string
  onChange: (val: string) => void
  hasError?: boolean
}) => {
  const hiddenRef = useRef<HTMLInputElement>(null)

  const openPicker = () => {
    hiddenRef.current?.showPicker?.()
    hiddenRef.current?.click()
  }

  // Parse HH:MM (24h) → 12h display
  let displayHH = ''
  let displayMM = ''
  let displayAmPm = ''

  if (value) {
    const [h, m] = value.split(':').map(Number)
    const isPm = h >= 12
    const h12 = h % 12 || 12
    displayHH = String(h12).padStart(2, '0')
    displayMM = String(m).padStart(2, '0')
    displayAmPm = isPm ? 'P.M.' : 'A.M.'
  }

  return (
    <div className='relative'>
      {/* Hidden native time input */}
      <input
        ref={hiddenRef}
        type='time'
        value={value}
        onChange={e => onChange(e.target.value)}
        className='absolute opacity-0 w-0 h-0 pointer-events-none'
        tabIndex={-1}
        style={{ colorScheme: 'dark' }}
      />

      {/* Three visible display boxes */}
      <div className='flex gap-2 items-center'>
        <DisplayBox
          value={displayHH}
          placeholder='HH'
          width='w-12'
          onClick={openPicker}
          hasError={hasError}
        />
        <span className='text-gray-400 text-sm font-old-standard'>:</span>
        <DisplayBox
          value={displayMM}
          placeholder='MM'
          width='w-12'
          onClick={openPicker}
          hasError={hasError}
        />
        <DisplayBox
          value={displayAmPm}
          placeholder='A.M.'
          width='w-16'
          onClick={openPicker}
          hasError={hasError}
        />
      </div>
    </div>
  )
}

// ─── Enquire Form ─────────────────────────────────────────────────────────────

const EnquireForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<EnquireData>()

  const onSubmit = (data: EnquireData) => {
    console.log('Enquire:', data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 sm:h-130'>
      <div>
        <label className={labelClass}>Full Name</label>
        <input {...register('fullName', { required: 'Full name is required' })} className={inputBase} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Email ID</label>
        <input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
          })}
          className={inputBase}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Contact Number</label>
        <input
          type='tel'
          {...register('contactNumber', {
            required: 'Contact number is required',
            pattern: { value: /^[0-9+\-\s()]{7,15}$/, message: 'Enter a valid phone number' },
          })}
          className={inputBase}
        />
        {errors.contactNumber && <p className={errorClass}>{errors.contactNumber.message}</p>}
      </div>

      <div>
        <label className={labelClass}>What would you like to discuss?</label>
        <textarea
          rows={5}
          {...register('message', { required: 'Please enter a message' })}
          className={inputBase + ' resize-none'}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {isSubmitSuccessful && (
        <p className='text-[#CEA574] font-old-standard text-sm text-center'>✓ Message sent successfully!</p>
      )}

      <button type='submit' className={submitBtn}>Get in Touch</button>
    </form>
  )
}

// ─── Meeting Form ─────────────────────────────────────────────────────────────

const MeetingForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<MeetingData>({
    defaultValues: { date: '', time: '' },
  })

  const dateVal = watch('date')
  const timeVal = watch('time')

  const onSubmit = (data: MeetingData) => {
    console.log('Meeting:', data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 sm:h-130'>

      <div>
        <label className={labelClass}>Full Name</label>
        <input {...register('fullName', { required: 'Full name is required' })} className={inputBase} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Email ID</label>
        <input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
          })}
          className={inputBase}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Contact Number</label>
        <input
          type='tel'
          {...register('contactNumber', {
            required: 'Contact number is required',
            pattern: { value: /^[0-9+\-\s()]{7,15}$/, message: 'Enter a valid phone number' },
          })}
          className={inputBase}
        />
        {errors.contactNumber && <p className={errorClass}>{errors.contactNumber.message}</p>}
      </div>

      {/* Date + Time row */}
      <div className='flex gap-6 flex-wrap'>

        {/* Date */}
        <div className='sm:flex-1 min-w-0'>
          <label className={labelClass}>*Date</label>
          {/* Register hidden field for validation */}
          <input type='hidden' {...register('date', { required: 'Please select a date' })} />
          <DatePickerGroup
            value={dateVal}
            onChange={v => setValue('date', v, { shouldValidate: true })}
            hasError={!!errors.date}
          />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div className='sm:flex-1 min-w-0'>
          <label className={labelClass}>*Time</label>
          <input type='hidden' {...register('time', { required: 'Please select a time' })} />
          <TimePickerGroup
            value={timeVal}
            onChange={v => setValue('time', v, { shouldValidate: true })}
            hasError={!!errors.time}
          />
          {errors.time && <p className={errorClass}>{errors.time.message}</p>}
        </div>

      </div>

      <p className='font-old-standard sm:text-sm text-xs text-gray-500 mb-8'>
        *Working Hours<br />
        Mon – Sat: 10:00 AM – 8:00 PM<br />
        Sunday: By Appointment Only
      </p>

      {isSubmitSuccessful && (
        <p className='text-[#CEA574] font-old-standard text-sm text-center'>✓ Appointment booked!</p>
      )}

      <button type='submit' className={submitBtn}>Book Appointment</button>
    </form>
  )
}

// ─── Main ContactForm ─────────────────────────────────────────────────────────

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState<'enquire' | 'meeting'>('enquire')

  return (
    <div className='
      px-4 sm:px-8 md:px-12 xl:px-[80px]
      py-12 md:py-16 xl:py-[80px]
      flex flex-col items-center justify-center
    '>
      <h1 className='
        font-playfair font-normal text-center
        text-[28px] sm:text-[36px] md:text-[40px]
        mb-8 md:mb-10
      '>
        Get in Touch with Us
      </h1>

      <div
        className='
          border-2 border-[#CEA574] rounded-3xl
          p-5 sm:p-7 md:p-8
          w-full bg-[#3a3530]
         
        '
        style={{ maxWidth: '600px', boxShadow: '0 8px 40px rgba(206,165,116,0.15)' }}
      >
        {/* Tabs */}
        <div className='flex justify-between items-center mb-1 gap-2 p-3'>
          <button
            type='button'
            onClick={() => setActiveTab('enquire')}
            className={`
              font-playfair font-normal sm:text-lg sm:text-xl md:text-2xl
              transition-colors duration-200 text-left
              ${activeTab === 'enquire' ? 'text-[#CEA574]' : 'text-white/60 hover:text-white'}
            `}
          >
            Enquire
          </button>
          <button
            type='button'
            onClick={() => setActiveTab('meeting')}
            className={`
              font-playfair font-normal sm:text-lg sm:text-xl md:text-2xl
              transition-colors duration-200 text-right
              ${activeTab === 'meeting' ? 'text-[#CEA574]' : 'text-white/60 hover:text-white'}
            `}
          >
            Schedule a Meeting
          </button>
        </div>

        {/* Sliding underline */}
        <div className='relative h-px bg-[#7a7470] mb-6 mt-2'>
          <div
            className='absolute top-[-0.5px] h-[2px] bg-[#CEA574] transition-all duration-300 ease-in-out rounded-full'
            style={{
              width: activeTab === 'enquire' ? '22%' : '45%',
              left: activeTab === 'enquire' ? '0%' : '55%',
            }}
          />
        </div>

        <div className={activeTab === 'enquire' ? 'block' : 'hidden'}>
          <EnquireForm />
        </div>
        <div className={activeTab === 'meeting' ? 'block' : 'hidden'}>
          <MeetingForm />
        </div>
      </div>
    </div>
  )
}

export default ContactForm