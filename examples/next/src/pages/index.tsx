import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Either } from '@itsumono/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='format-detection' content='telephone=no, email=no, address=no' />
        <meta name='description' content='Next App' />
        <title>Next App</title>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>

      <div>
        <Either test={true} match={<>表示される</>} not={<>表示されない</>} />
      </div>
    </>
  )
}

export default Home
