import React from 'react'
import Image from 'next/image'
import ChangeThemeButton from './ChangeThemeButton'

import type { FC } from 'react'

export type HeaderProps = {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className='navbar shadow-lg'>
      <div className='navbar-start'>
        <ChangeThemeButton>
          <Image
            src={'/icons/logo.webp'}
            alt={'site logo'}
            className={'h-12 w-12'}
            width={48}
            height={48}
          />
        </ChangeThemeButton>
      </div>
    </header>
  )
}

export default Header
