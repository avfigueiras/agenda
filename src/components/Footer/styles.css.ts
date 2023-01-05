
import { SxProps, Theme } from '@mui/material/styles'
import theme from '../../../theme/themes'

const containerFooter: SxProps<Theme> = {
  height: 122,
  [theme.breakpoints.down('md')]: {
    height: 188
  }
}

const containerIcons: SxProps<Theme> = {
  [theme.breakpoints.down('md')]: {
    mr: 5.5,
    flexDirection: 'column',
    alignItems: 'baseline',
    gap: 2
  }
}

const firstGrid: SxProps<Theme> = {
  background: '#004D4D',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const iconsFooter: SxProps<Theme> = {
  [theme.breakpoints.down('md')]: {
    color: '#FFFFFF',
    width: '16px',
    height: '16px'
  }
}

export { containerFooter, containerIcons, firstGrid, iconsFooter }
