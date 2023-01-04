import React, { FC } from 'react'

// Components
import AvatarGroupApp from './Components/AvatarGroup'
//import Notifications from '../Dashboard/Components/Notifications/index'

// NextJS
import Image from 'next/image'

// Material-UI
import {
  Typography,
  Box,
  Button,
  Stack,
  ButtonGroup,
  IconButton
} from '@mui/material'

// Icons
import {
  NotificationsRounded,
  LocationOnRounded,
  Home,
  LogoutRounded
} from '@mui/icons-material'
//import { useAuth } from '../../hooks/use-auth'
import Router from 'next/router'

// import { HeaderAppProps } from './interface'

interface Props {
  type?: string
}

const HeaderApp: FC<Props> = props => {
  //const { logout } = useAuth()
  // export default function HeaderApp(props: HeaderAppProps) {
  const { type = 'default' } = props

  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  /*   const signOut = async () => {
      try {
        await logout()
        Router.replace('/')
      } catch (error) {
        console.error(error)
      }
    } */

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          height: '100%',
          p: {
            xs: 1,
            md: 1
          },
          zIndex: 150,
          position: 'sticky',
          top: 0,
          background: '#099',
          boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.1);'
        }}>

      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          height: '100%',
          maxHeight: {
            xs: 79,
            md: 94
          },
          p: {
            xs: 1,
            md: 2
          },
          zIndex: 150,
          position: 'sticky',
          top: 0,
          background: '#FFFFFF',
          boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.1);'
        }}
      >
        <div>
          <Box display="flex" alignItems="center">
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              {type === 'default' && (
                <Image
                  src="/img/logo-redsalud.svg"
                  alt="Picture of the author"
                  width={176.49}
                  height={47.44}
                />
              )}
            </Box>
          </Box>
        </div>
        <div id='navbar'>
          <Stack direction="row" gap={4} alignItems="center">
            {type === 'default' && (
              <>
              <Typography color="#099" fontSize={14} fontWeight={600}>
                Reserva hora
              </Typography>
              <Typography color="#099" fontSize={14} fontWeight={600}>
                Consultar hora
              </Typography>
              <Typography color="#099" fontSize={14} fontWeight={600}>
                Confirmar hora
              </Typography>
              <Typography color="#099" fontSize={14} fontWeight={600}>
                Anular hora
              </Typography>
              <Typography color="#099" fontSize={14} fontWeight={600}>
                Cambiar hora
              </Typography>
              </>
            )}
          </Stack>
        </div>
        {/*       {open && (
        <Notifications
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      )} */}
      </Stack>
    </>
  )
}

export default HeaderApp
