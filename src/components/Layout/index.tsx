import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Card, Box, Typography } from '@mui/material'
import FooterApp from '../Footer'
import HeaderApp from '../Header'

interface Props {
  children?: ReactNode
}

export const Layout: FC<Props> = props => {
  const { children } = props

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          margin: '0 auto'
        }}
      >
        <HeaderApp type="default" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'calc(100vh - 150px)',
            background:'#f2f2f2'
          }}
        >
            {children}
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

Layout.propTypes = {
  children: PropTypes.node
}
