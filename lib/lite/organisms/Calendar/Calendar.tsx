import React, { useEffect, useState, HTMLAttributes, forwardRef } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import locale from 'dayjs/locale/id'
import weekdayPlugin from 'dayjs/plugin/weekday'
import objectPlugin from 'dayjs/plugin/toObject'
import isTodayPlugin from 'dayjs/plugin/isToday'
import { twMerge } from 'tailwind-merge'

import Header from './Header'
import Days from './Days'
import Action from './Action'

type DaysType = {
  dates: {
    day: any
    isCurrentDay: boolean
    isCurrentMonth: boolean
    month: any
    year: any
  }[]
}

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (d?: Date | undefined) => void
}

type CalendarProps = Omit<HTMLAttributes<HTMLDivElement>, keyof Props> & Props

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    { open, onClose, onSubmit, id = 'cirkel-calendar', className, ...props },
    _ref,
  ) => {
    const now = dayjs().locale({
      ...locale,
    })

    dayjs.extend(weekdayPlugin)
    dayjs.extend(objectPlugin)
    dayjs.extend(isTodayPlugin)

    const [currentMonth, setCurrentMonth] = useState(now)
    const [arrayOfDays, setArrayOfDays] = useState<DaysType[]>([])
    const [date, setDate] = useState<Dayjs | undefined>()

    const clearDate = () => {
      setDate(undefined)
    }

    const formateDateObject = (date: Dayjs) => {
      const clonedObject = { ...date.toObject() }

      return {
        day: clonedObject.date,
        month: clonedObject.months,
        year: clonedObject.years,
        isCurrentMonth: clonedObject.months === currentMonth.month(),
        isCurrentDay: date.isToday(),
      }
    }

    const nextMonth = () => {
      const plus = currentMonth.add(1, 'month')
      setCurrentMonth(plus)
    }

    const prevMonth = () => {
      const minus = currentMonth.subtract(1, 'month')
      setCurrentMonth(minus)
    }

    const nextYear = () => {
      const plus = currentMonth.add(1, 'year')
      setCurrentMonth(plus)
    }

    const prevYear = () => {
      const minus = currentMonth.subtract(1, 'year')
      setCurrentMonth(minus)
    }

    const handleClickCell = (e: React.MouseEvent<HTMLDivElement>) => {
      const date = e.currentTarget.textContent

      if (date !== undefined) {
        clearDate()
      }

      if (!date || date !== undefined) {
        setDate(
          dayjs(
            `${currentMonth.get('year')}-${currentMonth.add(1, 'month')
              .get('month')}-${date}`,
          ),
        )
      }
    }

    const getAllDays = () => {
      let currentDate = currentMonth.startOf('month').weekday(0)
      const nextMonth = currentMonth.add(1, 'month').month()

      // eslint-disable-next-line
      let allDates = []
      let weekDates = []

      let weekCounter = 1

      while (currentDate.weekday(0).toObject().months !== nextMonth) {
        const formated = formateDateObject(currentDate)

        weekDates.push(formated)

        if (weekCounter === 7) {
          allDates.push({ dates: weekDates })
          weekDates = []
          weekCounter = 0
        }

        weekCounter++
        currentDate = currentDate.add(1, 'day')
      }

      setArrayOfDays(allDates)
    }

    useEffect(() => {
      getAllDays()
    }, [currentMonth, date])

    const renderCells = () => {
      const rows = [] as React.ReactNode[]
      let days = [] as React.ReactNode[]

      arrayOfDays.forEach((week, index) => {
        week.dates.forEach((d, i) => {
          days.push(
            <div
              className={twMerge(
                'flex w-[calc(100%/7)] rounded-lg px-2 py-2 justify-center capitalize cursor-pointer hover:text-white hover:bg-blue-600',
                d.month !== currentMonth.month() && '!text-gray-400',
                d.day === date?.date() && d.month === currentMonth.month() && '!bg-blue-600 !text-white rounded-lg',
              )}
              key={i}
              data-date={`${d.day} -${d.month} -${d.year} `}
              onClick={
                d.month !== currentMonth.month() ? () => null : handleClickCell
              }
            >
              <span className="number">{d.day}</span>
            </div>,
          )
        })
        rows.push(
          <div className="flex justify-center" key={index}>
            {days}
          </div>,
        )
        days = []
      })

      return <div className="flex flex-col px-4 pt-2">{rows}</div>
    }

    const handleSubmit = () => {
      if (date) {
        onSubmit(new Date(date.format('YYYY-MM-DD')))
        onClose()
      }
    }

    useEffect(() => {
      setDate(undefined)
    }, [])

    return open ? (
      <div
        ref={_ref}
        id={id}
        className={twMerge('flex flex-col', className)}
        onMouseLeave={onClose}
        {...props}
      >
        <Header
          onClickNext={nextMonth}
          onClickPrev={prevMonth}
          onClickDoubleNext={nextYear}
          onClickDoublePrev={prevYear}
          currentMonth={currentMonth.format('MMMM YYYY')}
        />
        <Days now={now} />
        {renderCells()}
        <Action onCancel={onClose} onSubmit={handleSubmit} />
      </div>
    ) : (
      <div />
    )
  },
)
