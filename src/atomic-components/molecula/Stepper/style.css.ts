import { SxProps, Theme } from '@mui/material/styles'
// import theme from '../../../../../theme/themes'

const stepLabel: SxProps<Theme> = {
  '& .MuiStepLabel-label': {
    marginTop: '5px',
    color: '#009999',
    fontSize: 14,
    fontWeight: 700
  }
}

const info: SxProps<Theme> = {
  fontSize: 12,
  fontWeight: 500,
  textAlign: 'center'
}

export { stepLabel, info }
