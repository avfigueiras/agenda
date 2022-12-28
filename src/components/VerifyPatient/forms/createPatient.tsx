import React, { FC, SyntheticEvent, useEffect, useState } from 'react'

import {
  Button,
  Stack,
  TextField,
  Autocomplete,
  InputAdornment
} from '@mui/material'
import { ErrorRounded, Clear } from '@mui/icons-material'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from '../../../store'
import { setUser } from '../../../slices/user'
import { genderConst } from '../../../config/const'
import { useGetRegionsQuery } from '../../../services/api-portal/user'

interface Props {
  next: () => void
}

const CreatePatientForm: FC<Props> = ({ next }) => {
  const { isLoading } = useGetRegionsQuery()
  const [genderValue, setGenderValue] = useState('')
  const [genderChange, setGenderChange] = useState(false)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const regexNumber = /(?=.*[0-9])/

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      lastName2: user.lastName2,
      gender: user.gender
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(255, 'Máximo de carácteres superado')
        .required('Este campo es requerido')
        .test(
          'checkNumber',
          'No se permiten números en este campo',
          function (value) {
            if (value) return !regexNumber.test(value)
            return true
          }
        ),
      lastName: Yup.string()
        .max(255, 'Máximo de carácteres superado')
        .required('Este campo es requerido')
        .test(
          'checkNumber',
          'No se permiten números en este campo',
          function (value) {
            if (value) return !regexNumber.test(value)
            return true
          }
        ),
      lastName2: Yup.string()
        .max(255, 'Máximo de carácteres superado')
        .required('Este campo es requerido')
        .test(
          'checkNumber',
          'No se permiten números en este campo',
          function (value) {
            if (value) return !regexNumber.test(value)
            return true
          }
        ),
      gender: Yup.object().shape({
        id: Yup.string().required('Este campo es requerido').nullable(false)
      })
    }),
    onSubmit: async (values): Promise<void> => {
      dispatch(
        setUser({
          firstName: values.firstName,
          lastName: values.lastName,
          lastName2: values.lastName2,
          gender: values.gender
        })
      )
      next()
    }
  })

  useEffect(() => {
    if (user.documentNumber) {
      if (user.firstName) formik.setFieldValue('firstName', user.firstName)
      if (user.lastName) formik.setFieldValue('lastName', user.lastName)
      if (user.lastName2) formik.setFieldValue('lastName2', user.lastName2)
      setGenderValue(user.gender?.label || '')
      if (user.gender) formik.setFieldValue('gender', user.gender)
    }
  }, [user])

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Stack sx={{ width: '100%' }}>
        <TextField
          color={
            Boolean(formik.errors.firstName) && formik.touched.firstName
              ? 'error'
              : 'primary'
          }
          sx={{ mt: 2 }}
          label="Nombres"
          fullWidth
          name="firstName"
          error={Boolean(formik.errors.firstName) && formik.touched.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {Boolean(formik.errors.firstName) &&
                  formik.touched.firstName && (
                    <ErrorRounded color="error" sx={{ background: 'none' }} />
                  )}
              </InputAdornment>
            )
          }}
        />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <TextField
            color={
              Boolean(formik.errors.lastName) && formik.touched.lastName
                ? 'error'
                : 'primary'
            }
            label="Apellido Paterno"
            fullWidth
            name="lastName"
            error={Boolean(formik.errors.lastName) && formik.touched.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(formik.errors.lastName) &&
                    formik.touched.lastName && (
                      <ErrorRounded color="error" sx={{ background: 'none' }} />
                    )}
                </InputAdornment>
              )
            }}
          />
          <TextField
            color={
              Boolean(formik.errors.lastName2) && formik.touched.lastName2
                ? 'error'
                : 'primary'
            }
            label="Apellido Materno"
            fullWidth
            name="lastName2"
            error={Boolean(formik.errors.lastName2) && formik.touched.lastName2}
            helperText={formik.touched.lastName2 && formik.errors.lastName2}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName2}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(formik.errors.lastName2) &&
                    formik.touched.lastName2 && (
                      <ErrorRounded color="error" sx={{ background: 'none' }} />
                    )}
                </InputAdornment>
              )
            }}
          />
        </Stack>
        <Autocomplete
          freeSolo
          sx={{ mt: 2 }}
          clearIcon={
            <>
              {formik.errors.gender?.id && genderChange ? (
                <ErrorRounded
                  color="error"
                  sx={{ background: 'none', mt: -0.7 }}
                />
              ) : (
                <Clear fontSize="small" />
              )}
            </>
          }
          value={formik.values.gender}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(
            e: SyntheticEvent<Element, Event>,
            value: string | { label: string; id: string } | null
          ) => {
            if (value) formik.setFieldValue('gender', value)
            else formik.setFieldValue('gender', '')
          }}
          inputValue={genderValue}
          onInputChange={(event, newGenderValue) => {
            setGenderChange(true)
            if (newGenderValue) setGenderValue(newGenderValue)
            else {
              formik.setFieldValue('gender', '')
              setGenderValue('')
            }
          }}
          options={genderConst}
          renderInput={params => (
            <TextField
              {...params}
              label="Sexo biológico"
              name="gender"
              color={
                formik.errors.gender?.id && genderChange ? 'error' : 'primary'
              }
              error={Boolean(formik.errors.gender?.id) && genderChange}
              helperText={genderChange && formik.errors.gender?.id}
            />
          )}
        />
      </Stack>
      <Button
        disabled={isLoading}
        type="submit"
        variant="primary"
        fullWidth
        sx={{ mt: 4 }}
      >
        Continuar
      </Button>
    </form>
  )
}

export default CreatePatientForm
