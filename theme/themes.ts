import { createTheme } from '@mui/material/styles'
import { MuiButtonCustom } from '../styles/Components/MuiButton.css'
import { MuiSvgIconCustom } from '../styles/Components/MuiSvgIcon.css'
import { MuiTextFieldCustom } from '../styles/Components/MuiTextField.css'
import { MuiAlertCustom } from '../styles/Components/MuiAlert.css'
import { MuiTextCustom } from '../styles/Components/MuiText.css'

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    primary: true
    secondary: true
    textCustom: true
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#E6F5F5'
    },
    error: {
      main: '#AB1A1A'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 784,
      lg: 1414,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Nunito',
    button: {
      textTransform: 'none'
    }
  },
  components: {
    // @ts-expect-error No define props
    MuiButton: MuiButtonCustom,
    // @ts-expect-error No define props
    MuiSvgIcon: MuiSvgIconCustom,
    // @ts-expect-error No define props
    MuiTextField: MuiTextFieldCustom,
    // @ts-expect-error No define props
    MuiAlert: MuiAlertCustom,
    MuiText: MuiTextCustom,
    MuiIconButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: '#009999'
          }
        }
      ]
    }
  }
})

export default theme
