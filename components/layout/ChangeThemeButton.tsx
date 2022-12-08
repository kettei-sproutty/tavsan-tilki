'use client'
import React from 'react'
import { ThemeIcon } from '../icons'

import type { FC } from 'react'

type ParsedCookies = { [key: string]: string }

const ChangeThemeButton: FC = () => {
  const getTheme = (theme: string | null) => {
    switch (theme) {
      case 'tilki':
        return 'tavsan'
      default:
        return 'tilki'
    }
  }

  const handleThemeChange = () => {
    const cookies = document.cookie
      .split(';')
      .reduce((prev: ParsedCookies, current) => {
        const [name, value] = current.trim().split('=')
        return { ...prev, [name]: value }
      }, {})

    const theme = getTheme(cookies.theme)
    const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    document.cookie = `theme=${theme}; expires=${date.toUTCString()}; path=/`

    document.querySelector('html').setAttribute('data-theme', theme)
  }

  return (
    <React.Fragment>
      <button
        aria-label='Change theme'
        className='btn btn-ghost btn-circle shadow-sm'
        onClick={handleThemeChange}
      >
        <ThemeIcon />
      </button>
    </React.Fragment>
  )
}

export default ChangeThemeButton
