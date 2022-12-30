import React, { useState } from 'react'

import { ArrowBack, ErrorRounded } from '@mui/icons-material'

import { Avatar, Box, Typography, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { format } from 'rut.js'
import { FormikHelpers, useFormik } from 'formik'

/* import SuccessMessageLoginApp from './SuccessMessage'
import LoginForm from './forms/login' */

export default function VerifyPatientApp() {
  const [show, setShow] = useState(false)
  const styles = {
    select: {
      paddingLeft: '5px',
      border: '1px solid #dfdfdf',
      borderRadius: '2px',
      marginRight: '2rem',
      paddingRight: '2rem',
      backgroundPositionY: '5px',
      width: '100%',
      height: '56px',
      fontSize: '16px',
    },
    button: {
      height: '30px',
      width: '200px',
      float: 'right',
      cursor: 'not-allowed',
      background: '#747473',
      color: 'rgba(255,255,255,.5)',
      border: 'none',
      fontSize: '14px',
    }
  } as const;
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

      <select id="patientInfoDocType" style={styles.select}><option label="Elegir ..." value="">Elegir ...</option><option label="Carnet de Identidad" value="NationalId" selected="selected">Carnet de Identidad</option><option label="Pasaporte" value="Passport">Pasaporte</option></select>
      <TextField
        color={'primary'}
        margin="normal"
        fullWidth
        id="rut"
        label="Ingresa tu Rut"
        name="documentNumber"
        autoComplete="rut"
        autoFocus
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <button style={styles.button}>CONTINUAR</button>


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
