'use client'

import { FC, useState } from 'react'
import Image from 'next/image'

interface AddToCartProps {

}

const AddToCart: FC<AddToCartProps> = ({ }) => {
  const [quantity, setQuantity] = useState(0)

  const addToCart = () => {
    setQuantity(prev => Math.min(prev + 1, 999))
  }

  const removeFromCart = () => {
    setQuantity(prev => (Math.max(prev - 1, 0)))
  }

  return (
    <div className="h-28 w-full flex flex-col gap-4">
      <div className="relative h-1/2 w-full flex items-center justify-center bg-greyblue-300 rounded-xl">
        <button
          onClick={removeFromCart}
          className="absolute left-4 text-orange text-3xl font-bold"
        >
          {`-`}
        </button>

        <div>
          <p className="text-xl font-bold">
            {quantity}
          </p>
        </div>

        <button
          onClick={addToCart}
          className="absolute right-4 text-orange text-3xl font-bold"
        >
          {`+`}
        </button>

      </div>

      <button
        onClick={addToCart}
        className="h-1/2 w-full flex items-center justify-center gap-4 
                  bg-orange rounded-xl shadow-xl shadow-orange/30
                   font-semibold text-greyblue-300">
        <svg
          width="28"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className='fill-greyblue-300'
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill-rule="nonzero"
          />
        </svg>
        <p>
          {`Add to cart`}
        </p>
      </button>
    </div>
  )
}

export default AddToCart