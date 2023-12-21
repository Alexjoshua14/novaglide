import Image from 'next/image'
import { FC } from 'react'
import MobileMenu from './mobileMenu'
import CartButton from './cartButton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import DesktopMenu from './desktopMenu'

interface NavBarProps {

}

const navOptions = [
  {
    text: 'Collections',
    href: '/'
  }, {
    text: 'Men',
    href: '/'
  }, {
    text: 'Women',
    href: '/'
  }, {
    text: 'About',
    href: '/'
  }, {
    text: 'Contact',
    href: '/'
  },

]

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <div className="z-40 fixed top-0 left-1/2 -translate-x-1/2 nav-height w-full max-w-7xl page-gutter-x bg-white/40 backdrop-blur-xl">
      <div className="w-full h-full flex items-center justify-between sm:border-b-[1px] border-b-greyblue-500/40">
        <div className="h-full flex items-center justify-center gap-4 md:gap-12 text-xs">
          <div className="grid place-items-center md:hidden">
            <MobileMenu navOptions={navOptions} />
          </div>
          <div className="text-2xl font-semibold tracking-tight px-1 subpixel-antialiasedased">
            {`novaglide`.toLowerCase()}
          </div>
          <div className="hidden md:flex">
            <DesktopMenu navOptions={navOptions} />
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