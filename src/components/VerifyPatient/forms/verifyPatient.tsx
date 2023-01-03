import React, { FC, SyntheticEvent, useState } from 'react'

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

const VerifyPatientForm: FC = () => {
 
  const [documentTypeValue, setGenderValue] = useState('')
  const [documentTypeChange, setDocTypeChange] = useState(false)

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

  return (
    <form onSubmit={formik.handleSubmit} noValidate style={{width:'100%', paddingTop:'45px'}} >
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
          <TextField
          id="outlined-select-currency-native"
          select
          label="Tipo de documento"
          defaultValue="Elegir ..."
          SelectProps={{
            native: true,
          }}
          helperText="Campo obligatorio"
          variant="filled"
        >
          {documentTypeConst.map((option) => (
            <option key={option.label} value={option.id}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Tipo de documento"
          defaultValue="Elegir ..."
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
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
          <TextField
            color={formik.errors.documentNumber ? 'error' : 'primary'}
            margin="normal"
            fullWidth
            id="rut"
            label="Número de documento(RUT del paciente)"
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
              background:'transparent',
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
