'use client'

import React, { FC, useState } from 'react'
import Image from 'next/image'
import Cart from '../cart/cart'

interface CartButtonProps {

}

const CartButton: FC<CartButtonProps> = ({ }) => {
  const [open, setOpen] = useState(false)


  return (
    <>
      <button
        onClick={() => setOpen(prev => !prev)}
      >
        <Image src={`/images/icon-cart.svg`} alt="cart" width={24} height={24} />
      </button>
      <Cart hidden={open} />
    </>
  )
}

export default CartButton