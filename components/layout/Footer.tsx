import React from 'react'
import { SocialIcon } from '../icons'

import type { FC } from 'react'

export type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className='footer items-center p-4 bg-base-300 absolute bottom-0'>
      <div className='items-center grid-flow-col'>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a
          className='btn btn-ghost btn-circle'
          target={'_blank'}
          aria-label='View source on github'
          href='https://github.com/kettei-sproutty/tavsan-tilki'
        >
          <SocialIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
