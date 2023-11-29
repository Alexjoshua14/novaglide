'use client'

import React, { FC, useCallback, useState } from 'react'
import Image from 'next/image'
import Cart from '../cart/cart'
import { DialogOverlay, Overlay } from '@radix-ui/react-dialog'
import { useSelector } from 'react-redux'

interface CartButtonProps {

}

const CartButton: FC<CartButtonProps> = ({ }) => {
  const [open, setOpen] = useState(false)
  const { count } = useSelector((state: any) => state.cart)

  return (
    <>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative"
      >
        <div
          hidden={count === 0}
          className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 
                      px-2 text-[.6rem] rounded-full bg-orange 
                      text-white font-bold leading-snug transition-all"
        >
          {count > 99 ? `99+` : count}
        </div>
        <Image src={`/images/icon-cart.svg`} alt="cart" width={24} height={24} />
      </button>
      <Cart className={open ? 'block' : 'hidden'} />
    </>
  )
}

export default CartButton