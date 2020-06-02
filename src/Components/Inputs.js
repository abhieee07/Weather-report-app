import React, { useState } from 'react'
import classes from './Input.module.css'

const Inputs = (props) => {
    const [City, setCity] = useState('')
    const [Country, setCountry] = useState('')
    return (
        <div>
            <form className={classes.Input} onSubmit={props.submitted(City, Country)}>
                <input type="text" value={City} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
                <input type="text" value={Country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" />
                <button type="submit">Get weather</button>
            </form>

        </div>
    )
}

export default Inputs
