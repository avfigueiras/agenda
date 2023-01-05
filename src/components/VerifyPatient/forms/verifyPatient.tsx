import React, { ChangeEventHandler, FC, SyntheticEvent, useState } from 'react'

import {
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Autocomplete,
  Alert,
  CircularProgress,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material'
import { Clear, ErrorRounded } from '@mui/icons-material'

// Validate rut
import { validate, format } from 'rut.js'

// Formik
import { FormikHelpers, useFormik } from 'formik'
import * as yup from 'yup'

import Router from 'next/router'
import { documentTypeConst } from '../../../config/const'
import MyComponent from '../../keyboard/MyComponent'

const VerifyPatientForm: FC = () => {

  const [documentTypeValue, setGenderValue] = useState('')
  const [documentTypeChange, setDocTypeChange] = useState(false)
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
      paddingBottom: '16px',
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
  const validationSchema = yup.object({
    documentNumber: yup
      .string()
      .min(6, 'No se puede crear paciente con rut menor de 100.')
      .max(15, 'No se puede crear paciente con rut menor de 100.')
      .required('Campo obligatorio')
      .test('checkErrorRut', 'Datos inválidos.', function (value) {
        if (value) return validate(value)
        return true
      }),
    documentType: yup
      .string()
      .required('Campo obligatorio')
  })

  interface FormikHelperProps {
    documentNumber: string
    documentType: string
    submit: null
  }

  function setError(helpers: FormikHelpers<FormikHelperProps>, text: string) {
    helpers.setStatus({ success: false })
    helpers.setErrors({
      submit: text
    })
    helpers.setSubmitting(false)
    helpers.setFieldError('documentNumber', ' ')
  }

  const formik = useFormik({
    initialValues: {
      documentType: '',
      documentNumber: '',
      submit: null
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        /*  if (values.documentNumber) {
           // TODO: respuesta backend
           const resp = await getEmail(
             format(values.documentNumber, { dots: false })
           ).unwrap()
           if (resp.length < 1) {
             setError(
               helpers,
               'Tus datos no coinciden. Revísalos y vuelve a ingresarlos o regístrate.'
             )
             return
           }
           await signInWithEmailAndPassword(resp[0].email, values.password)
           Router.push('/dashboard')
         } */
      } catch (e) {
        setError(
          helpers,
          'Datos inválidos'
        )
      }
    }
  })


  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const closeAlert = () => {
    formik.validateForm()
  }
  const [label, setLabel] = useState('RUT del Paciente');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value as string);
    const value = event.target.value as string;
    if (value === 'rut') {
      setLabel('RUT del Paciente');
    }
    if (value === 'passport') {
      setLabel('Número de Pasaporte');
    }


  }

  return (
    <form onSubmit={formik.handleSubmit} noValidate style={{ width: '100%', paddingTop: '45px' }}>
      <Stack spacing={2} >
        {/* <Autocomplete
              freeSolo
              sx={{ mt: 2 }}
              clearIcon={
                <>
                  {formik.errors.documentType?.id && documentTypeChange ? (
                    <ErrorRounded
                      color="error"
                      sx={{ background: 'none', mt: -0.7 }}
                    />
                  ) : (
                    <Clear fontSize="small" />
                  )}
                </>
              }
              value={formik.values.documentType}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              onChange={(
                e: SyntheticEvent<Element, Event>,
                value: string | { label: string; id: string } | null
              ) => {
                if (value) formik.setFieldValue('documentType', value)
                else formik.setFieldValue('documentType', '')
              }}
              inputValue={documentTypeValue}
              onInputChange={(event, newDocumentTypeValue) => {
                setDocTypeChange(true)
                if (newDocumentTypeValue) setDocTypeChange(newDocumentTypeValue)
                else {
                  formik.setFieldValue('documentType', '')
                  setDocTypeChange('')
                }
              }}
              options={documentTypeConst}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Elegir..."
                  name="documentType"
                  color={
                    formik.errors.documentType?.id && documentTypeChange ? 'error' : 'primary'
                  }
                  error={Boolean(formik.errors.documentType?.id) && documentTypeChange}
                  helperText={documentTypeChange && formik.errors.documentType?.id}
                />
              )}
            /> */}
        {/*           <TextField
          id="outlined-select-currency-native"
          select
          label="Tipo de documento"
          defaultValue="Elegir ..."
          SelectProps={{
            native: true,
          }}
          helperText="Campo obligatorio"
          variant="filled"
          style={styles.select}
        >
          {documentTypeConst.map((option) => (
            <option key={option.label} value={option.id}>
              {option.label}
            </option>
          ))}
        </TextField> */}
        <TextField
          id="outlined-select-currency-native"
          select
          label="Documento de Identificación"
          defaultValue="Elegir ..."
          SelectProps={{
            native: true,
          }}
          onChange={handleChange}
        //helperText="Please select your currency"
        >
          {documentTypeConst.map((option) => (
            <option key={option.label} value={option.id}>
              {option.label}
            </option>
          ))}
        </TextField>
        {/*  <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel >Elegir ...</InputLabel>
            <Select 
            labelId="demo-simple-select-label"
              value={formik.values.documentType}
              label="Elegir..."
              onChange={documentTypeChange}
            >
            {documentTypeConst.map(i =><MenuItem> {i.label}</MenuItem>)}
            </Select>
            <FormHelperText>{documentTypeChange && formik.errors.documentType?.id}</FormHelperText>
          </FormControl> */}
        <div id="mobileHidden">
          <TextField
            color={formik.errors.documentNumber ? 'error' : 'primary'}
            margin="normal"
            fullWidth
            id="rut"
            label={label}
            name="documentNumber"
            autoComplete="rut"
            autoFocus
            value={formik.values.documentNumber}
            onBlur={formik.handleBlur}
            onChange={event => {
              if (event.target.value)
                formik.setFieldValue(
                  'documentNumber',
                  event.target.value.length <= 1
                    ? event.target.value
                    : format(event.target.value)
                )
              else formik.setFieldValue('documentNumber', '')
            }}
            error={
              formik.touched.documentNumber &&
              Boolean(formik.errors.documentNumber)
            }
            helperText={
              formik.touched.documentNumber && formik.errors.documentNumber
            }
            InputProps={{
              background: 'transparent',
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {formik.errors.documentNumber && (
                      <ErrorRounded color="error" sx={{ background: 'none' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div id="keyboard">
          <MyComponent />
        </div>
        <Button
          disabled={
            formik.isSubmitting ||
            !formik.isValid ||
            !formik.values.documentNumber ||
            !formik.values.documentNumber
          }
          type="submit"
          variant="primary"
          fullWidth
          sx={{ mt: 1 }}
          style={styles.button}
        >
          {!formik.isSubmitting ? (
            'CONTINUAR'
          ) : (
            <CircularProgress sx={{ p: 1, color: '#009999' }} />
          )}
        </Button>
      </Stack>
    </form>
  )
}

export default VerifyPatientForm
