import React from 'react'

export const CreatePatient = () => {
    return (
        <>
            <label htmlFor="as">creacion de paciente</label>
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
        </>
    )
}
