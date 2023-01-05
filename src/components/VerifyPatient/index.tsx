import React, { useState } from 'react'
import {  Box } from '@mui/material'
import VerifyPatientForm from './forms/verifyPatient'

export default function VerifyPatientApp() {
  const [show, setShow] = useState(false)

  return (
    <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid red'
          }}
        > 
          <VerifyPatientForm />
        </Box>   
    </>
  )
}
