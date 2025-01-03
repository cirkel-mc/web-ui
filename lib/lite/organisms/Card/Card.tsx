import { twMerge } from "tailwind-merge";
import { Button } from "../../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export interface CardProps {
  className?: string;
  image: string
  name: string
  price: string
  address: string
  btnText?: string
  rating?: number
  onClick: () => void
  onBuy: () => void
  withCta?: boolean
  isDisabled?: boolean
}

export function Card(props: CardProps) {
  const { image, name, price, address, rating, btnText, withCta, isDisabled, className, onClick, onBuy } =
    props

  return (
    <div
      className={twMerge("flex flex-col rounded-[10px] relative min-w-[170px] max-w-[220px]  cursor-pointer pb-2", className)}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px' }}
    >
      <div className="relative w-full h-[180px]" onClick={onClick} style={{ height: '180px' }}>
        <img
          src={image}
          alt=""
          className="absolute w-full h-full left-0 top-0 rounded-t-[10px] object-cover"
        />
      </div>
      <div className="bg-primary-30 w-full text-white px-2 py-2">
        <span>Jakarta</span>
      </div>
      <div className="flex flex-col relative justify-start mt-[10px] px-2">
        <p className="text-xl font-semibold text-ellipsis overflow-hidden line-clamp-2 leading-[29px]">
          {name}
        </p>
        <div className="flex gap-1 flex-wrap">
          <p className="text-primary-30 font-semibold">{price}</p>
          <p className="text-sm text-neutral-400">/ hour</p>
        </div>
        <p className='text-gray-500 mt-2 overflow-hidden leading-6 text-ellipsis line-clamp-2'>{address}</p>
        {rating && <div className="my-1 flex items-center gap-1">
          <FontAwesomeIcon className="w-4 h-4 text-yellow-500" icon={faStar} />
          <span className="text-neutral-400 text-sm inline-block">{rating}</span>
          <span className="bg-neutral-400 h-1 w-1 rounded-full inline-block mx-1" />
          <span className="text-neutral-400 text-sm inline-block mb-[2px]">0 reviews</span>
        </div>}
      </div>
      {
        withCta && (
          <div className="w-full px-2 py-2 flex justify-center mt-2">
            <Button
              disabled={isDisabled}
              size="sm"
              round="sm"
              classes="text-base font-normal lg:font-semibold lg:text-[18px] lg:p-[10px]"
              variant="primary"
              onClick={onBuy}
            >
              {btnText}
            </Button>
          </div>
        )
      }
    </div >
  )
}
