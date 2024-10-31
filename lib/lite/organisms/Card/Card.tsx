import { twMerge } from "tailwind-merge";
import { Button } from "../../atoms/Button"

export interface CardProps {
  className?: string;
  image: string
  name: string
  price: string
  address: string
  btnText?: string
  onClick: () => void
  onBuy: () => void
  withCta?: boolean
  isDisabled?: boolean
}

export function Card(props: CardProps) {
  const { image, name, price, address, btnText, withCta, isDisabled, className, onClick, onBuy } =
    props

  return (
    <div
      className={twMerge("flex flex-col rounded-[10px] relative min-w-[170px] max-w-[220px]  cursor-pointer pb-4", className)}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px' }}
    >
      <div className="relative w-full h-[180px]" onClick={onClick} style={{ height: '180px' }}>
        <img
          src={image}
          alt=""
          className="absolute w-full h-full left-0 top-0 rounded-t-[10px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-start mt-[10px] px-2">
        <p className="text-2xl text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 mb-1 leading-[29px]">
          {name}
        </p>
        <p className="text-base text-gray-600 font-medium">{price}</p>
        <p className='text-gray-500 text-center mt-2 overflow-hidden text-ellipsis line-clamp-2'>{address}</p>
      </div>
      {withCta && (
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
      )}
    </div>
  )
}
