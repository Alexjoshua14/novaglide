
import { FC, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, clearCart } from '@/lib/redux/reducers/cartSlice'
import Image from 'next/image'


interface CartProps extends HTMLAttributes<HTMLDivElement> {
}

const cartItem = {
  name: "Fall Limited Edition Sneakers",
  price: 125.00,
  image: "/images/image-product-1-thumbnail.jpg",
}

const SneakerCartItem = ({ quantity }: { quantity: number }) => (
  <div className="min-w-[290px] w-full h-14 flex gap-3">
    <div className="relative h-full aspect-square rounded overflow-clip">
      <Image src={cartItem.image} alt={`Product image of ${cartItem.name}`} fill className="object-cover" />
    </div>
    <div className="h-full w-full flex flex-col gap-1 text-greyblue-800 font-light">
      <div>
        <p>
          {cartItem.name}
        </p>
      </div>
      <div className="flex gap-2">
        <p>
          {`\$${cartItem.price.toFixed(2)} x ${quantity}`}
        </p>
        <p className="font-semibold">
          {`\$${(cartItem.price * quantity).toFixed(2)}`}
        </p>
      </div>
    </div>
  </div>
)

const Cart: FC<CartProps> = ({ className, ...props }) => {
  // Get count from redux store
  // In production state should be typed
  const { count } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(removeItem())
  }

  const handleCheckout = () => {
    console.log("Checkouting out...")
    dispatch(clearCart())
  }

  return (
    <div className={cn("z-30 fixed top-20 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 h-[270px] w-full max-w-[400px] p-2", className)} {...props}>
      <div className="w-full h-full flex flex-col bg-greyblue-300 rounded-xl shadow-xl">
        <div className="h-1/4 w-full px-6 flex items-center border-b-[1px] border-b-greyblue-500/50 text-lg font-semibold tracking-wide">
          Cart
        </div>
        <div className="h-full w-full p-6 flex items-center justify-center">
          {count > 0 ?
            (
              <div className="h-full w-full flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <SneakerCartItem quantity={count} />
                  <button
                    className="text-xs"
                    onClick={deleteItem}
                  >
                    <Image src="/images/icon-delete.svg" alt="remove" width={16} height={16} />
                  </button>
                </div>
                <button
                  onClick={handleCheckout}
                  className="h-14 w-full rounded-xl bg-orange text-greyblue-300"
                >
                  {`Checkout`}
                </button>
              </div>
            ) : (
              <div className="text-bold text-greyblue-800 font-semibold tracking-wide">
                {`Your cart is empty.`}
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Cart