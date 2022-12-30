import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Card, Box, Typography } from '@mui/material'
import FooterApp from '../Footer'
import HeaderApp from '../Header'

interface Props {
  children?: ReactNode
}

export const VerifyPatientLayout: FC<Props> = props => {
  const { children } = props

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign:'center'
        }}
      >
        <HeaderApp type="default"/>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign:'start',
            marginTop:'30px',
            paddingLeft:'330px'
          }}
        >
          <Typography fontWeight={800} fontSize={24} color="#01635e" borderBottom='2px solid'>
            Reserva de hora
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            color="#004c4d"
          >
            Paso 1: Identificar paciente
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
          }}
        >
          <Box
            component="main"
            sx={{ my: { md: 8, xs: 0 }, mx: 'auto', }}
            maxWidth="md"
          >
            <Card
              variant="outlined"
              sx={{
                padding: {
                  md: '32px 54px 32px 54px',
                  xs: '24px 24px 50px 24px'
                },
                maxWidth: '650px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)'
              }}
            >
              {children}
            </Card>
          </Box>
          <Box
            component="footer"
            sx={{
              mt: 'auto',
            }}
          >
            <FooterApp />
          </Box>
        </Box>
      </Box>
    </>
  )
}

VerifyPatientLayout.propTypes = {
  children: PropTypes.node
}
