
import { FC, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'


interface CartProps extends HTMLAttributes<HTMLDivElement> {

}

const Cart: FC<CartProps> = ({ className, ...props }) => {
  return (
    <div className={cn("fixed top-20 left-1/2 -translate-x-1/2 h-72 w-full max-w-400px p-2", className)} {...props}>
      <div className="w-full h-full flex flex-col bg-greyblue-300 rounded-xl">
        <div className="h-1/4 w-full px-6 flex items-center border-b-[1px] border-b-greyblue-500/50 text-lg font-semibold tracking-wide">
          Cart
        </div>
      </div>
    </div>
  )
}

export default Cart