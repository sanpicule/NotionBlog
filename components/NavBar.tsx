import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React, { useState } from 'react'
import { navMenuList } from '@/utils/data'
import NavNameItem from './NavNameItem'
import MobileMenuItem from './MobileMenuItem'
import Hamburger from './HamburgerMenu'
import CloseButton from './MobileCloseButton'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed z-10 bg-gray-700 w-full flex h-20 flex-wrap items-center justify-between py-3  text-white focus:text-gray-700 navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex items-center justify-between px-6">
        <div
          className="bg-grey-light rounded-md w-1/3"
          aria-label="breadcrumb"
        >
          <Link href="/">
            <h5
              className="text-white text-base md:text-lg lg:text-xl xl:text-2xl"
            >
              {siteConfig.title}
            </h5>
          </Link>
        </div>
        <ul className='flex items-center justify-end w-2/3'>
          {navMenuList.map((navMenu) => (
            <NavNameItem
              key={navMenu.id}
              pathName={navMenu.pathName}
              menuName={navMenu.menuName}
            />
          ))}
          <Hamburger setOpen={setOpen}/>
        </ul>
      </div>

      {/* スマホ時のメニュー */}
      <div className={`${open ? 'transition ease-in-out translate-y-0 duration-300' : 'transition -translate-y-full ease-in-out duration-300'} p-4 fixed top-0 left-0 border border-black w-full bg-black opacity-90`}>
        <ul className='w-full text-center'>
          {navMenuList.map((navMenu) => (
            <MobileMenuItem
              key={navMenu.id}
              setOpen={setOpen}
              pathName={navMenu.pathName}
              menuName={navMenu.menuName}
            />
          ))}
        </ul>
        <CloseButton
          setOpen={setOpen}
        />
      </div>
    </nav>
  )
}

export default NavBar
