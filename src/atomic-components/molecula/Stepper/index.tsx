import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

// Icons
import { CheckCircleRounded, AdjustRounded } from '@mui/icons-material'

// Styles
import { stepLabel, info } from './style.css'
import {
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  styled,
  Typography
} from '@mui/material'

const steps = [
  { step: ' 1', info: 'Identificar paciente' },
  { step: ' 2', info: 'Seleccionar servicio' },
  { step: ' 3', info: 'Seleccionar especialidad o profesional' },
  { step: ' 4', info: 'Seleccionar día y hora' },
  { step: ' 5', info: 'Confirmar y reservar' }
]

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-52% + 15px)',
    right: 'calc(46% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#009999'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#009999'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
}))

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ ownerState }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#009999'
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#009999',
      zIndex: 1,
      width: 32,
      height: 32
    },
    '& .QontoStepIcon-circle': {
      /* width: 32,
      height: 32,
      borderRadius: '50%'
      backgroundColor: 'currentColor' */
    }
  })
)

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircleRounded className="QontoStepIcon-completedIcon" />
      ) : (
        <AdjustRounded
          sx={{
            width: 32,
            height: 32
          }}
        />
      )}
    </QontoStepIconRoot>
  )
}

interface Props {
  currentStep: number,
}

export default function StepperApp(props: Props) {
  const { currentStep } = props
  return (
    <Box sx={{
      width: '100%',
      position: 'relative',
      top: '11px'
    }}>
      <Stepper
        activeStep={currentStep}
        alternativeLabel
        sx={stepLabel}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={QontoStepIcon} />
          </Step>
          
        ))}
      </Stepper>
      {/* <Stepper
        activeStep={currentStep}
        alternativeLabel
        sx={stepLabel}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel icon={index +1}>
            </StepLabel>
          </Step>
        ))}
      </Stepper> */}
    </Box>
  )
}
