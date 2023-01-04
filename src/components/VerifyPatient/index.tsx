import React, { useState } from 'react'

import { ArrowBack, ErrorRounded } from '@mui/icons-material'

import { Avatar, Box, Typography, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { format } from 'rut.js'
import { FormikHelpers, useFormik } from 'formik'
import StepperApp from './components/Stepper'

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
      borderRadius: '5px',
    },
    label: {
      letterSpacing: '-.75px',
      fontWeight: '600',
      fontFamily: 'Nunito',
      color: '#747473',
      fontSize: '14px',
      maxWidth: '100%',
      marginBottom: '5px',
      display: 'flex',
    },
    textCenter: {
      textAlign: 'center',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '4px',
      textTransform: 'uppercase',
      fontFamily: 'Nunito',
      color: '#099',
    },
    p: {
      color: '#747473',
      fontWeight: '300',
      margin: '0 0 10px',
    }

  } as const;
  return (
    <>
    <StepperApp actualStep={show ? 1 : 0}/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >

      </Box>
      <div className="textCenter" style={styles.textCenter}>
        <h3 style={styles.h3}>¿Para quién es la hora?</h3>
        <div className="textCenter" style={styles.textCenter}>
          <p style={styles.p}>Complete los datos del <u><strong>Paciente</strong> que será atendido:</u></p>
        </div>
      </div>
      <label style={styles.label}>Documento de Identificación</label>
      <select id="patientInfoDocType" style={styles.select}><option label="Elegir ..." value="">Elegir ...</option><option label="Carnet de Identidad" value="NationalId" selected="selected">Carnet de Identidad</option><option label="Pasaporte" value="Passport">Pasaporte</option></select>
      <label style={styles.label}>Rut del paciente</label>
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
