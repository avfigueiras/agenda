import React, { FC, useState } from 'react'

import {
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert
} from '@mui/material'

// Validate rut
import { validate, format } from 'rut.js'

// Formik
import { FormikHelpers, useFormik } from 'formik'
import * as yup from 'yup'

import { ErrorRounded } from '@mui/icons-material'
import Router from 'next/router'

const VerifyPatientForm: FC = () => {
 

  const validationSchema = yup.object({
    documentNumber: yup
      .string()
      .min(6, 'No se puede crear paciente con rut menor de 100.')
      .max(15, 'No se puede crear paciente con rut menor de 100.')
      .required('Campo obligatorio')
      .test('checkErrorRut', 'Datos inválidos.', function (value) {
        if (value) return validate(value)
        return true
      })
  })

  interface FormikHelperProps {
    documentNumber: string
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
      documentNumber: '',
      submit: null
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        if (values.documentNumber) {
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
        }
      } catch (e) {
        setError(
          helpers,
          'Tus datos no coinciden. Revísalos y vuelve a ingresarlos o regístrate.'
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
    <form onSubmit={formik.handleSubmit} noValidate>
      <Stack spacing={2}>
        <TextField
          color={formik.errors.documentNumber ? 'error' : 'primary'}
          margin="normal"
          fullWidth
          id="rut"
          label="Ingresa tu Rut"
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
            !formik.values.documentNumber
          }
          type="submit"
          variant="primary"
          fullWidth
          sx={{ mt: 1 }}
        >
          {!formik.isSubmitting ? (
            'Ingresar'
          ) : (
            <CircularProgress sx={{ p: 1, color: '#009999' }} />
          )}
        </Button>
      </Stack>
    </form>
  )
}

export default VerifyPatientForm
