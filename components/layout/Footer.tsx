import React from 'react'
import { SocialIcon } from '../icons'

import type { FC } from 'react'

export type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className='footer items-center p-4 bg-base-300 absolute bottom-0'>
      <div className='grid-flow-col gap-4 place-self-center justify-self-end'>
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
