import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Box from './Box'

interface HeaderProps {
  currentMonth: string
  onClickPrev: () => void
  onClickNext: () => void
  onClickDoubleNext: () => void
  onClickDoublePrev: () => void
}

function Header({
  currentMonth,
  onClickDoubleNext,
  onClickDoublePrev,
  onClickPrev,
  onClickNext,
}: HeaderProps) {
  return (
    <div className="flex w-full justify-between p-4 mb-4">
      <div className="flex gap-2">
        <Box
          icon={
            <>
              <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="w-3 h-3 -ml-[6px]"
              />
            </>
          }
          onClick={onClickDoublePrev}
        />
        <Box
          icon={<FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />}
          onClick={onClickPrev}
        />
      </div>

      <p className="inline-block font-medium text-neutral-900">
        {currentMonth}
      </p>
      <div className="flex gap-2">
        <Box
          icon={<FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />}
          onClick={onClickNext}
        />
        <Box
          icon={
            <>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 h-3 -mr-[6px]"
              />
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </>
          }
          onClick={onClickDoubleNext}
        />
      </div>
    </div>
  )
}

export default Header
