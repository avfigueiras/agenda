import React, { useState } from 'react'
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
  const [show, setShow] = useState(false)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          background: '#f2f2f2',
        }}
      >
        <HeaderApp type="default" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
            marginTop: '30px',
            //paddingLeft: '350px'
            alignItems: 'center',
            background: '#f2f2f2',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'start',
              marginTop: '30px',
              //paddingLeft: '500px'
            }}
          >
          </Box>
          <div>
          <Typography fontWeight={800} fontSize={24} color="#01635e">
            Reserva de hora
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            color="#004c4d"
          >
            Paso 1: Identificar paciente
          </Typography>
          </div>
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
            sx={{ my: { md: 8, xs: 8 }, mx: 'auto', }}

          >
            <Card
            className="overflow"
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
