'use client'

import React from 'react'

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32px'
          height='32px'
          viewBox='0 0 32 32'
          version='1.1'
        >
          <path
            fill='currentColor'
            d='M26.783 0.593c-3.563 0.133-7.895 4.609-6.413 8.783 1.569 4.141 2.574 7.087 2.784 11.708 3.766-3.789 7.225-7.902 7.504-12.675 0.092-3.873-1.741-6.728-3.876-7.815zM17.387 17.789c-0.535 0.956-1.237 1.994-2.152 3.132-1.923 2.423-3.862 6.398-3.265 11.058 7.943-0.877 10.423-6.838 10.641-10.114-1.497-2.259-4.213-3.649-5.224-4.076zM1.369 3.489c-0.282 3.646 1.277 9.067 7.599 10.792 2.662 0.788 4.527 1.274 6.546 2.007 2.952 1.073 5.269 2.442 7.105 4.805-0.341-4.066-2.015-8.726-4.69-12.36-3.815-5.185-10.422-7.674-16.561-5.244z'
          />
        </svg>
      </button>
    </React.Fragment>
  )
}

export default ChangeThemeButton
