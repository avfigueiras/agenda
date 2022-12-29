// import React, { useState, MouseEvent } from 'react'
import React from 'react'

// Material-lU
import {
  Avatar,
  AvatarGroup,
  // IconButton,
  // Menu,
  // MenuItem,
  // Stack,
  // ListItemText,
  // Button,
  // Icon
  Box
} from '@mui/material'
// import { styled } from '@mui/material/styles'
// import { grey } from '@mui/material/colors'

// import IconApp from './micro-componets/IconApp'
// import LabelApp from './micro-componets/LabelApp'

// const Puller = styled(Box)(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: 'absolute',
//   bottom: 0,
//   left: 'calc(50% - 15px)'
// }))

// interface AvatarItemProps {
//   src: string
//   name: string
// }

// function AvatarItem (props: AvatarItemProps) {
//   const { src, name } = props

//   return (
//     <Box
//       sx={{
//         flexDirection: 'column',
//         textAlign: 'center'
//       }}
//     >
//       <Avatar
//         alt='Remy Sharp'
//         src={src}
//         sx={{
//           width: 71,
//           height: 71
//         }}
//       />
//       <LabelApp text={name} />
//     </Box>
//   )
// }

export default function AvatarGroupApp() {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const open = Boolean(anchorEl)

  // const handleClose = async () => {
  //   setAnchorEl(null)
  // }

  // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }

  return (
    <Box sx={{ display: 'flex' }}>
      <AvatarGroup max={4} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          sx={{
            width: {
              xs: 32,
              md: 48
            },
            height: {
              xs: 32,
              md: 48
            }
          }}
          alt="Remy Sharp"
          src="/icons/AVATAR-01.svg"
        />
        {/* <Avatar
          sx={{ width: 32, height: 32 }}
          alt='Travis Howard'
          src='../icons/AVATAR-02.svg'
        />
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt='Travis Howard'
          src='../icons/AVATAR-03.svg'
        />
        <Avatar
          sx={{
            width: 24,
            height: 24,
            zIndex: 150
          }}
          alt='Cindy Baker'
        >
          <IconButton onClick={handleClick}>
            <IconApp
              text='add_circle'
              sx={{
                color: '#008A8A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </IconButton>
        </Avatar> */}
      </AvatarGroup>
      {/* <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          marginTop: {
            md: '22px',
            xs: '19px'
          },
          marginLeft: {
            md: '-20px',
            xs: '16px'
          },
          maxWidth: {
            md: '630px'
          }
        }}
        PaperProps={{
          style: {
            width: '105%',
            maxWidth: 'unset'
          }
        }}
      >
        <MenuItem
          sx={{
            marginTop: -1,
            borderBottom: '2px solid #E6F5F5',
            display: {
              md: 'none'
            }
          }}
        >
          <ListItemText>Mi Perfil y preferencias</ListItemText>
          <IconApp text='arrow_right_alt' />
        </MenuItem>
        <Box
          sx={{
            background: '#E6F5F5',
            p: 2,
            marginTop: -1,
            display: {
              xs: 'none',
              md: 'block'
            }
          }}
        >
          <LabelApp text='¡Hola, Maria!' fontSize={18} fontWeight={500} color='#333333' />
          <LabelApp text='Puedes cambiar el paciente en esta sección' fontSize={24} fontWeight={600} color='#004D4D' />
        </Box>
        <LabelApp
          text='Cambiar paciente'
          fontWeight={700}
          sx={{
            marginLeft: 2,
            marginTop: 1,
            display: {
              md: 'none'
            }
          }}
        />
        <Stack
          direction='row'
          justifyContent='space-evenly'
          alignItems='flex-start'
          spacing={2}
          sx={{
            p: 2
          }}
        >
          <AvatarItem src='icons/AVATAR-01.svg' name='Patricia' />
          <AvatarItem src='icons/AVATAR-05.svg' name='Juanita' />
          <AvatarItem src='icons/AVATAR-03.svg' name='Marcos' />
          <AvatarItem src='icons/AVATAR-04.svg' name='Victor' />
        </Stack>
        <MenuItem
          disableTouchRipple
          sx={{
            display: {
              xs: 'block',
              md: 'none'
            }
          }}
        >
          <Button
            variant='outlined'
            startIcon={<Icon className='material-symbols-rounded'>account_circle</Icon>}
            sx={{
              color: '#006B6B',
              borderColor: '#1AA3A3',
              borderRadius: 100,
              fontSize: 18,
              fontWeight: 600,
              '&:active': {
                background: '#99CC00'
              },
              '&:focus': {
                background: '#99CC00',
                color: '#000000'
              }
            }}
            fullWidth
          >
            Cambiar paciente
          </Button>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            height: 30
          }}
        >
          <IconApp
            text='keyboard_arrow_up'
            sx={{
              marginBottom: 2,
              color: '#006B6B',
              position: 'absolute',
              left: 'calc(50% - 13px)'
            }}
          />
          <Puller />
        </MenuItem>
      </Menu> */}
    </Box>
  )
}
