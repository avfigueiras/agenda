import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Card, Box, Typography } from '@mui/material'
import StepperApp from '../../molecula/Stepper'

interface Props {
  children?: ReactNode
  step: number
}


export const LayoutTimeReservation: FC<Props> = props => {
  const { children, step =1 } = props

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '60%',
          paddingTop: '20px',
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
            alignItems: 'flex-start'
          }}
        >
          <Typography fontWeight={800} fontSize={24} color="#01635e">
            Reserva de hora
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            color="#004c4d"
          >
            Paso {step}: Identificar paciente
          </Typography>
        </Box>
        
        <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <StepperApp currentStep={step} />
        <Card
          variant="outlined"
          sx={{
            width:'100%',
            border:'none'
            //boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)'
          }}
        >
          {children}
        </Card>
      </Box>
      </Box>
    </>
  )
}

LayoutTimeReservation.propTypes = {
  children: PropTypes.node
}
