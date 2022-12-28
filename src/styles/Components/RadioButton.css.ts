import { SxProps, Theme } from '@mui/material/styles'

const radioButtonDefault: SxProps<Theme> = {
  width: 380,
  height: 48,
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: ' 1px solid #D5D5D5'
}

const radioButtonDetails: SxProps<Theme> = {
  '&.MuiButtonBase-root': {
    color: '#008A8A'
  }
}

export { radioButtonDefault, radioButtonDetails }
