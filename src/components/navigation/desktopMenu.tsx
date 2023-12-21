import Link from 'next/link'
import { FC } from 'react'

interface desktopMenuProps {
  navOptions: {
    text: string
    href: string
  }[]
}

const desktopMenu: FC<desktopMenuProps> = ({ navOptions }) => {
  return (
    <nav>
      <ul className="flex gap-8 text-greyblue-800/80">
        {navOptions.map((option, index) => (
          <Link href={option.href} key={`desktop-navigation-${option.text}`}
            className="hover:text-orange/80 transition-colors">
            {option.text}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default desktopMenu