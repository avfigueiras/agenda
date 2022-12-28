import React, { useState } from 'react'

import { ArrowBack } from '@mui/icons-material'

import { Avatar, Box, Typography, Button } from '@mui/material'

/* import SuccessMessageLoginApp from './SuccessMessage'
import LoginForm from './forms/login' */

export default function VerifyPatientApp() {
  const [show, setShow] = useState(false)

  return (
    <>
      
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography fontWeight={800} fontSize={24} color="#01635e">
            Reserva de hora
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={18}
            color="#0F0F0F"
            align="center"
          >
            Paso 1: Identificar paciente
          </Typography>
        </Box>
    
        
          {/* <Button
            type="submit"
            variant="textCustom"
            startIcon={<ArrowBack />}
            sx={{
              mt: 5,
              fontSize: 16,
              fontWeight: 700
            }}
          >
            Volver
          </Button> */}
       
    </>
  )
}
