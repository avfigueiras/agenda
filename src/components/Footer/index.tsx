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

  return (
    <Grid container sx={containerFooter}>
      <Grid
        container
        item
        alignContent="center"
        justifyContent="center"
        gap={2}
        xs={6}
        md={12}
        lg={3}
        sx={{ background: '#009999' }}
      >
        <Grid container>
          <Grid item xs >
            <Box paddingLeft={4}>
              <Image
                src="/img/logo-redsalud-footer.svg"
                alt="logo-red-salud"
                width={194}
                height={52}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
