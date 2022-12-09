import React from 'react'
import type { FC } from 'react'

const APP_NAME = 'Tavsan-Tilki'
const APP_DESCRIPTION = 'Tavsan Tilki'

const Head: FC = () => {
  return (
    <React.Fragment>
      <title>Tavsan Tilki</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0 viewport-fit=cover'
      />
      <meta
        name='application-name'
        content={APP_NAME}
      />
      <meta
        name='apple-mobile-web-app-capable'
        content='yes'
      />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='default'
      />
      <meta
        name='apple-mobile-web-app-title'
        content={APP_NAME}
      />
      <meta
        name='description'
        content={APP_DESCRIPTION}
      />
      <meta
        name='format-detection'
        content='telephone=no'
      />
      <meta
        name='mobile-web-app-capable'
        content='yes'
      />
      <meta
        name='theme-color'
        content='#FFFFFF'
      />
      {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
      {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/apple-touch-icon.png'
      />
      <link
        rel='manifest'
        href='/manifest.json'
      />
      <link
        rel='shortcut icon'
        href='/favicon.ico'
      />
    </React.Fragment>
  )
}

export default Head
