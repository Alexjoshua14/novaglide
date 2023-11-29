import { FC } from 'react'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  text: string
  onClick?: () => void
}

const NavLink: FC<NavLinkProps> = ({ href, text, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      {text}
    </Link>
  )
}

export default NavLink