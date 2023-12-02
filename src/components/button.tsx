// Create modular button for add to cart and checkout button
// note that we should forward refs to the button component for animation
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  Icon?: React.ReactNode
}

const Button: FC<ButtonProps> = ({ text, Icon, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cn(`h-full w-full flex items-center justify-center gap-4 
                  bg-orange rounded-xl shadow-xl shadow-orange/30
                   font-semibold text-greyblue-300`, className)}
      {...props}
    >
      {Icon}
      <p>
        {text}
      </p>
    </button>
  )
}

export default Button