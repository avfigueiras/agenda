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
import { LayoutTimeReservation } from '../../../atomic-components/organism/LayoutTimeReservation'

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
    <LayoutTimeReservation step={2}>
        
    </LayoutTimeReservation>
  )
}

export default VerifyPatientForm
