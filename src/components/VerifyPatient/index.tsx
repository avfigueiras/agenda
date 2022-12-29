import React, { useState } from 'react'

import {  Box, Typography, Button } from '@mui/material'
import StepperApp from './components/Stepper'
import { BorderColor } from '@mui/icons-material'

export default function VerifyPatientApp() {
  const [show, setShow] = useState(false)

  return (
    <>
      <StepperApp actualStep={show ? 1 : 0} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
        </Box>   
    </>
  )
}
