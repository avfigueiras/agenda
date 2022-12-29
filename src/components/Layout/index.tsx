import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Card, Box } from '@mui/material'
import FooterApp from '../Footer'
import VerifyPatientApp from '../VerifyPatient'
import HeaderApp from '../Header'

interface Props {
  children?: ReactNode
}

export const VerifyPatientLayout: FC<Props> = props => {
  const { children } = props

  return (
    <>
    <Box>
      <HeaderApp />
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
          sx={{ my: { md: 8, xs: 0 }, mx: 'auto' }}
          maxWidth="sm"
        >
          <Card
            variant="outlined"
            sx={{
              padding: {
                md: '32px 54px 32px 54px',
                xs: '24px 24px 50px 24px'
              },
              maxWidth: '516px',
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
    </>
  )
}

VerifyPatientLayout.propTypes = {
  children: PropTypes.node
}
