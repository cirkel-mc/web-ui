import { Dayjs } from 'dayjs'

interface DaysProps {
  now: Dayjs
}

function Days({ now }: DaysProps) {
  const dateFormat = 'ddd'
  const days = []

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="w-[calc(100%/7)]" key={i}>
        {now.weekday(i).format(dateFormat)}
      </div>,
    )
  }

  return (
    <div className="flex gap-2 px-4 text-neutral-400 cursor-pointer">
      {days}
    </div>
  )
}

export default Days
