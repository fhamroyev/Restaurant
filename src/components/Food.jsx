import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Food({ id, name, description, thumb, price, addFoods, food }) {
    const [user] = useState(
        JSON.parse(localStorage.getItem('user'))
    )
    const nameFood = name.charAt(0).toUpperCase() + name.slice(1)
    const [aboutFood] = useState(description.slice(0, 170) + ' read more...')
    const userConfirmation = () => {
        if (user) {
            addFoods({ food })
        }
        else {
            alert('Enter log in')
        }
    }
    return (
        <div className='food box'>
                <img src={`http://localhost:1337${thumb}`} alt={name} width="320px" />
            <h1 className='title has-text-black'>{nameFood}</h1>
            <Link to={`food/${id}`}>
                <b className='subtitle has-text-link'>{aboutFood}</b>
            </Link>
            <p className='is-size-5 has-text-black has-text-weight-bold'>{price} soum</p>
            <button className='button mt-2' onClick={userConfirmation}>Add to cart</button>
        </div>
    )
}
