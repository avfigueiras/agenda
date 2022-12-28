
/* import { Inter } from '@next/font/google'
import { Layout } from '../src/components/Layout'

const inter = Inter({ subsets: ['latin'] })
  */

import React from 'react'
import type { NextPageWithLayout } from '../pages/_app'
import VerifyPatientApp from '../src/components/VerifyPatient'
import { VerifyPatientLayout } from '../src/components/Layout'

const HomePage: NextPageWithLayout = () => {
  return <VerifyPatientApp />
}

HomePage.getLayout = page => (
    <VerifyPatientLayout>{page}</VerifyPatientLayout>
)
export default HomePage

