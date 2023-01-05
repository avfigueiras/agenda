import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Card, Box, Typography } from '@mui/material'
import { LayoutTimeReservation } from '../../organism/LayoutTimeReservation'

interface Props {
  children?: ReactNode
  step: number
}

export const TimeReservation: FC<Props> = props => {
  const { children, step = 1 } = props

  return (
    <>
      <LayoutTimeReservation step={step} >
        {children}
      </LayoutTimeReservation>
    </>
  )
}

TimeReservation.propTypes = {
  children: PropTypes.node
}
