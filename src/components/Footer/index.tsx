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

    <>
      <Grid container sx={containerFooter}>
        <Grid
          container
          item
          alignContent="center"
          justifyContent="center"
          gap={2}
          xs={12}
          md={12}
          lg={12}
          sx={{ background: '#009999' }}
        >
          <div id="menuMobileFooter">
            <div className='menuMobileTab'>
              <span className='material-symbols-rounded'>
                help
              </span>
              <span className='menuMobileTab'>Más <br />Info.</span>
            </div>
            <div className='menuMobileTab'>
              <span className='material-symbols-rounded'>
                event_busy
              </span>
              <span>Anular <br />Hora</span>
            </div >
            <div className='menuMobileTab activeMenuBoton'>
              <span className='material-symbols-outlined'>
                calendar_month
              </span>
              <span>Reservar <br />Hora</span>
            </div >
            <div className='menuMobileTab'>
              <span className='material-symbols-outlined'>
                event_available
              </span>
              <span>Confirmar <br />Hora</span>
            </div >
            <div className='menuMobileTab'>
              <span className='material-symbols-outlined'>
                edit_calendar
              </span>
              <span>Cambiar <br />Hora</span>
            </div >
          </div >
          <Grid container>
            <Grid item xs >
              <Box 
              paddingLeft={4}
              display="flex"
              >
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
    </>
  )
}
