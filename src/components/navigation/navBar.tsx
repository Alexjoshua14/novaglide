import Image from 'next/image'
import { FC } from 'react'
import MobileMenu from './mobileMenu'
import CartButton from './cartButton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <div className="z-40 fixed top-0 h-16 w-full flex items-center justify-between px-6 bg-white/40 backdrop-blur-xl">
      <div className="h-full flex items-center justify-center gap-4 text-xs">
        <MobileMenu />
        <div className="text-2xl font-semibold tracking-tight px-1 subpixel-antialiasedased">
          {`novaglide`.toLowerCase()}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div>
          <CartButton />
        </div>
        <div>
          <Avatar>
            <AvatarImage src={`/images/image-avatar.png`} alt="profile image" width={32} height={32} />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default NavBar