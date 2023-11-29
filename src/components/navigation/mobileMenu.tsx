'use client'

import React, { FC, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './navLink'

interface MobileMenuProps {

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

const MobileMenu: FC<MobileMenuProps> = ({ }) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Image src="/images/icon-menu.svg" alt="menu" role="navigation" width={18} height={18} />
      </SheetTrigger>
      <SheetContent className="pt-24" side={'left'}>
        <nav>
          <ul className="flex flex-col gap-4 text-lg font-bold">
            {navOptions.map((option, index) => (
              <NavLink key={`mobile-navigation-${option.text}`} href={option.href} text={option.text} onClick={() => setOpen(false)} />
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu