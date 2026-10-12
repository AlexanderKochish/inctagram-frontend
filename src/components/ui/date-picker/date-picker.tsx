'use client'

import * as Popover from '@radix-ui/react-popover'
import { DayPicker } from '@daypicker/react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { uk } from 'date-fns/locale'
import s from './date-picker.module.css'
import '@daypicker/react/style.css'
import CalendarIcon from '../../../../public/icons/calendar-outline.svg'
import { useState } from 'react'

interface DatePickerProps {
  placeholder?: string
}

export const DatePicker = ({
  placeholder = 'Date select',
}: DatePickerProps) => {
  const [selected, setSelected] = useState<Date>()
  const [isOpen, setIsOpen] = useState(false)
  const handleSelect = (selectedDate: Date | undefined) => {
    setSelected(selectedDate)
    setIsOpen(false)
  }

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className={s.trigger_wrapper}>
        <span className={s.label}>{placeholder}</span>
        <Popover.Trigger asChild>
          <button
            type="button"
            className={s.trigger}
            data-state={isOpen ? 'open' : 'closed'}
          >
            <span>
              {selected ? format(selected, 'dd/MM/yyyy') : placeholder}
            </span>
            <CalendarIcon className={s.icon} />
          </button>
        </Popover.Trigger>
      </div>
      <Popover.Portal>
        <Popover.Content className={s.content} sideOffset={8} align="start">
          <DayPicker
            lang="uk"
            animate
            className={s.picker}
            mode="single"
            captionLayout="dropdown"

            selected={selected}
            onSelect={handleSelect}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
