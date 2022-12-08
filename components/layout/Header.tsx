import React from 'react'
import ChangeThemeButton from './Theme'
import Link from 'next/link'

import type { FC } from 'react'

export type HeaderProps = {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className='navbar bg-base-300 shadow-lg sticky'>
      <div className='navbar-start'>
        <div className='dropdown block md:hidden'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href='/'>Homepage</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <span className='font-bold normal-case text-xl'>Tavsan Tilki</span>
      </div>
      <div className='navbar-end'>
        <ChangeThemeButton />
      </div>
    </header>
  )
}

export default Header
