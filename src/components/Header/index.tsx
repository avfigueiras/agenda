import React, { FC } from 'react'


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


 import { HeaderAppProps } from './interface'

interface Props {
  type?: string
}

const HeaderApp: FC<Props> = props => {
  // export default function HeaderApp(props: HeaderAppProps) {
  const { type = 'default' } = props

  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null)

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
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
        zIndex: 100,
       // position: 'sticky',
        top: 0,
        background: '#FFFFFF',
        boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.1);'
      }}
    >
      <Box display="flex" alignItems="center">
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {type === 'default' && (
            <Image
              src="/img/logo-redsalud.svg"
              alt="Picture of the author"
              width={176.49}
              height={47.44}
            />
          )}
        </Box>
        <Box
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          {type === 'default' && (
            <Image
              src="/img/logo-redsalud-mobile.svg"
              alt="Picture of the author"
              width={66}
              height={62}
            />
          )}
        </Box>
      </Box>
      {/* <Stack direction="row">
        {type === 'default' && (
          <>
            <Typography
              sx={{
                color: '#000000',
                fontWeight: 600,
                fontSize: 16,
                paddingTop: {
                  xs: 3,
                  md: 2
                },
                marginRight: 1,
                marginLeft: {
                  xs: 0,
                  md: 0
                }
              }}
            >
              María
            </Typography>
          </>
        )}
      </Stack> */}
    </Stack>
  )
}

export default HeaderApp
