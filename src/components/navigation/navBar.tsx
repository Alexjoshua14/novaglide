import Image from 'next/image'
import { FC } from 'react'
import MobileMenu from './mobileMenu'
import CartButton from './cartButton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <div className="z-40 fixed top-0 nav-height w-full page-gutter-x bg-white/40 backdrop-blur-xl">
      <div className="w-full h-full flex items-center justify-between sm:border-b-[1px] border-b-greyblue-500/40">
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
          <button>
            <Avatar className="border-[1px] border-transparent hover:border-orange">
              <AvatarImage src={`/images/image-avatar.png`} alt="profile image" width={32} height={32} />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar