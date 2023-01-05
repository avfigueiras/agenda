import React from 'react'

// Styles
import {
  containerFooter,
  containerIcons,
  firstGrid,
  iconsFooter
} from './styles.css'

// NextJS
import Image from 'next/image'

// Icons
import {
  FacebookRounded,
  Instagram,
  YouTube,
  Twitter,
  Hotel,
  LocationOn
  /* HeadsetMic */
} from '@mui/icons-material'

// Material-UI
import { Box, Grid, Stack, Typography } from '@mui/material'

export default function FooterApp() {
  const socialIcons = (
    <Stack direction="row" spacing={{ xs: 4, lg: 5 }}>
      <FacebookRounded sx={iconsFooter} />
      <Twitter sx={iconsFooter} />
      <Instagram sx={iconsFooter} />
      <YouTube sx={iconsFooter} />
    </Stack>
  )

  return (
    <Grid container sx={containerFooter}>
      <Grid container item xs={6} md={9} lg={9} sx={firstGrid}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mx={8}
        >
        </Grid>
      </Grid>
      <Grid
        container
        item
        alignContent="center"
        justifyContent="center"
        gap={2}
        xs={6}
        md={3}
        lg={3}
        sx={{ background: '#009999' }}
      >
        <Box>
          <Image
            src="/img/logo-redsalud-footer.svg"
            alt="logo-red-salud"
            width={194}
            height={52}
          />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>{socialIcons}</Box>
      </Grid>
    </Grid>
  )
}
