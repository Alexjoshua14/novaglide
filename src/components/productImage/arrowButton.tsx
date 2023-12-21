'use client'

import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface ArrowButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

const ArrowButton: FC<ArrowButtonProps> = ({ className, ...props }) => {
  return (
    <button className={cn(`h-10 aspect-square rounded-full grid place-items-center bg-greyblue-300`, className)} {...props} />
  )
}

export default ArrowButton