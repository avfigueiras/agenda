import React from 'react'

import { Box, Typography, Button } from '@mui/material'
import { CheckCircle, ErrorRounded } from '@mui/icons-material'

interface Props {
  title: string
  subtitle: string
  textBtn: string
  type: string
}

const styles = {
  width: 50,
  height: 50,
  background: 'none'
}

export default function AlertCardApp(props: Props) {
  const { title, subtitle, type, textBtn } = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: { xs: '66vh', md: 'auto' }
      }}
    >
      {type === 'success' && <CheckCircle color="primary" sx={styles} />}
      {type === 'error' && <ErrorRounded color="error" sx={styles} />}
      {type === 'warning' && <ErrorRounded color="warning" sx={styles} />}

      <Typography
        fontWeight={600}
        fontSize={{ xs: 18, md: 24 }}
        color="#008A8A"
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={{ xs: 16, md: 18 }}
        color="#0F0F0F"
        align="center"
        sx={{ mt: 2 }}
      >
        {subtitle}
      </Typography>
      <Button variant="secondary" fullWidth href="/" sx={{ mt: 2 }}>
        {textBtn}
      </Button>
    </Box>
  )
}
