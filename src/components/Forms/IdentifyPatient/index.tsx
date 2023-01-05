import { Autocomplete, Box, Button, CircularProgress, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'

// Formik
import { FormikHelpers, useFormik } from 'formik'
import * as yup from 'yup'
import { documentTypeConst } from '../../../config/const'

// Validate rut
import { validate, format } from 'rut.js'
import { Clear, ErrorRounded } from '@mui/icons-material'
import theme from '../../../../theme/themes'
import MyComponent from '../../../atomic-components/molecula/keyboard/MyComponent'

const style = {
    button: {
        borderRadius: '100px',
        background: '#99CC00',
        fontWeight: '600',
        maxHeight: '48px',
    },
    hover: {
        borderRadius: '100px',
        background: '#004D4D',
        color: '#FFFFFF'
    },
    focus: {
        background: '#006B6B',
        color: '#FFFFFF',
        boxShadow: 'inset 0 0 0 2px #99CC00'
    },
    active: {
        borderRadius: '100px',
        background: '#008A8A',
        color: '#FFFFFF',
        boxShadow: 'inset 0 0 0 2px #008A8A'
    },
    disabled: {
        borderRadius: '100px',
        background: '#D5D5D5',
        color: '#9E9E9D'
    }
}

export const IdentifyPatientForm = () => {

    //tomando los valores del input de selccion de documento
    const [documentTypeValue, setdocumentTypeValue] = useState('')
    const [documentTypeChange, setdocumentTypeChange] = useState(false)

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
        documentType: yup.object().shape({
            id: yup.string().required('Campo obligatorio').nullable(false)
        })
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
        helpers.setFieldError('documentType', ' ')
    }

    const formik = useFormik({
        initialValues: {
            documentNumber: '',
            documentType: ''
        },
        validationSchema,
        onSubmit: values => {
            alert('holaaaaa');
        }
    })

    const closeAlert = () => {
        formik.validateForm()
    }
    //values toma el valor inicial que pusimos arriba, handleChange lo provee formik y lo agregamos a cada input
    const { values, handleChange, handleSubmit } = formik;

    const disabled = formik.isSubmitting ||
        !formik.isValid ||
        !formik.values.documentNumber && !formik.values.documentType

    return (
        <div className='text-container' style={{width:'100%', marginTop: '40px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Typography fontWeight={800} fontSize={20} color="#009999" margin='8px 0px 0px'>
                ¿PARA QUIÉN ES LA HORA?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='body2' fontWeight={300} color="#747473" margin='0px 0px 6px' style={{padding: '0px 10px' }}>
                    Complete los datos del <u><strong>Paciente</strong> que será atendido:</u>
                </Typography>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', padding: '0 35px 40px' }}>
                <Stack spacing={3} direction='column'>
                    <Autocomplete
                        freeSolo
                        sx={{ mt: 2 }}
                        clearIcon={
                            <>
                                {formik.errors.documentType && documentTypeChange ? (
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
                            setdocumentTypeChange(true)
                            if (newDocumentTypeValue) setdocumentTypeValue(newDocumentTypeValue)
                            else {
                                formik.setFieldValue('documentType', '')
                                setdocumentTypeValue('')
                            }
                        }}
                        options={documentTypeConst}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label="Documento de Identificación"
                                placeholder='Elegir ...'
                                name="documentType"
                                color={
                                    formik.errors.documentType?.id && documentTypeChange ? 'error' : 'primary'
                                }
                                error={Boolean(formik.errors.documentType?.id) && documentTypeChange}
                                helperText={documentTypeChange && formik.errors.documentType?.id}
                            />
                        )}
                    />
                    <TextField
                        color={formik.errors.documentNumber ? 'error' : 'primary'}
                        margin="normal"
                        fullWidth
                        id="rut"
                        placeholder='Ej:8.765.432-1'
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
                  {/*   <MyComponent /> */}
                </Stack>
                <Box sx={{
                    mt: 3,
                    borderTop: '1px solid #d8d8d8',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Box
                        sx={{
                            mt: 1,
                            width: '200px'

                        }}
                    >
                        <Button
                            disabled={disabled}
                            style={disabled ? style.disabled : style.active}
                            type="submit"
                            fullWidth
                            sx={{ mt: 1, }}
                        >
                            CONTINUAR
                        </Button>
                    </Box>
                </Box>
            </form>
        </div>
    )
}
