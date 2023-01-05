import React from 'react'
import { TimeReservation } from '../../src/atomic-components/template/TimeReservation'
import { Layout } from '../../src/components/Layout'
import VerifyPatientApp from '../../src/components/VerifyPatient'


const VerifyPatientPage = () => (
  <Layout>
    <TimeReservation step={1}>
      <form action="/send-data-here" method="post">
        <label >Roll Number</label>
        <input
          type="text"
          id="roll"
          name="roll"
          required
        />
        <label >Name:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Submit</button>
      </form>
    </TimeReservation>
  </Layout>
)
export default VerifyPatientPage

