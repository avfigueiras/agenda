import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { NextPage } from 'next'
/* import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme/themes' */
//import '../styles/globals.css'
import  type { FC, ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout){

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />) 
}

