import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export interface CardProps {
  className?: string;
  image: string
  name: string
  price: string
  city: string
  address: string
  rating?: number
  onClick: () => void
  total_transaction: number
  total_review: number
}

export function Card(props: CardProps) {
  const { image, name, price, address, rating, city, className, total_review, total_transaction, onClick } =
    props


  return (
    <div
      className={twMerge("flex flex-col rounded-[10px] relative min-w-1/2 max-w-full  cursor-pointer pb-2", className)}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px' }}
      onClick={onClick}
    >
      <div className="relative w-full h-[180px]" style={{ height: '180px' }}>
        <img
          src={image}
          alt=""
          className="absolute w-full h-full left-0 top-0 rounded-t-[10px] object-cover"
        />
      </div>
      <div className="bg-primary-30 w-full text-white px-2 py-2 flex gap-2 items-center">
        <FontAwesomeIcon icon={faLocationDot} className="text-white" color="#FFF" size="1x" />
        <span>{city}</span>
      </div>
      <div className="flex flex-col relative justify-start mt-[10px] px-2">
        <p className="text-lg font-semibold text-ellipsis overflow-hidden !leading-6 line-clamp-2">
          {name}
        </p>
        <p className="text-primary-30 font-medium my-1">{price}</p>
        <p className='text-gray-400 text-sm overflow-hidden text-ellipsis leading-5 my-1 line-clamp-2'>{address}</p>
        <div className=" flex items-center gap-1">
          <FontAwesomeIcon className="w-4 h-4 text-yellow-500" icon={faStar} />
          <span className="text-neutral-400 text-sm inline-block">{rating}</span>
          <span className="bg-neutral-400 h-1 w-1 rounded-full inline-block mx-1" />
          <span className="text-neutral-400 text-sm inline-block mb-[2px]">{total_review} reviews</span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{total_transaction} bookings</p>
      </div>
    </div >
  )
}
