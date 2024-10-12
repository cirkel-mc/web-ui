import { twMerge } from 'tailwind-merge'

interface RangePickerProps {
  range: string
  onToday?: () => void
  onWeekAgo?: () => void
  onLast30Days?: () => void
  onThisMonth?: () => void
  onLastMonth?: () => void
}

function RangePicker({
  range,
  onToday,
  onWeekAgo,
  onLast30Days,
  onThisMonth,
  onLastMonth,
}: RangePickerProps) {
  return (
    <div className="p-2 flex flex-col min-w-[117px] border-solid border-[1px] border-r-neutral-30">
      <div className="p-2">
        <button
          className={twMerge(
            'text-neutral-90 hover:cursor-pointer hover:text-primary-main',
            range === 'today' && 'text-primary-main',
          )}
          onClick={onToday}
        >
          Hari ini
        </button>
      </div>
      <div className="p-2">
        <button
          className={twMerge(
            'text-neutral-90 hover:cursor-pointer hover:text-primary-main',
            range === 'weekago' && 'text-primary-main',
          )}
          onClick={onWeekAgo}
        >
          7 hari terakhir
        </button>
      </div>
      <div className="p-2">
        <button
          className={twMerge(
            'text-neutral-90 hover:cursor-pointer hover:text-primary-main',
            range === '30daysago' && 'text-primary-main',
          )}
          onClick={onLast30Days}
        >
          30 hari terakhir
        </button>
      </div>
      <div className="p-2">
        <button
          className={twMerge(
            'text-neutral-90 hover:cursor-pointer hover:text-primary-main',
            range === 'thismonth' && 'text-primary-main',
          )}
          onClick={onThisMonth}
        >
          Bulan ini
        </button>
      </div>
      <div className="p-2">
        <button
          className={twMerge(
            'text-neutral-90 hover:cursor-pointer hover:text-primary-main',
            range === 'lastmonth' && 'text-primary-main',
          )}
          onClick={onLastMonth}
        >
          Bulan lalu
        </button>
      </div>
    </div>
  )
}

export default RangePicker
