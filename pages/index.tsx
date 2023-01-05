

import React, { useState } from 'react'
import { TimeReservation } from '../src/atomic-components/template/TimeReservation'
import { CreatePatient } from '../src/components/Forms/CreatePatient'
import { IdentifyPatientForm } from '../src/components/Forms/IdentifyPatient'
import Home from '../src/components/Home/Home'
import { Layout } from '../src/components/Layout'
import VerifyPatientApp from '../src/components/VerifyPatient'

const HomePage = () => {
  const [step, setStep] = useState(1)

  return <Layout>
    <TimeReservation step={step}>
      {step === 1 && <IdentifyPatientForm />}
      {step === 2 && <CreatePatient />}

      {/* <button onClick={() => setStep(step + 1)}> up step </button>
      <button onClick={() => setStep(step - 1)}> down step </button> */}
    </TimeReservation>
  </Layout>
}


export default HomePage

