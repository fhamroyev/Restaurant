import React, { useState } from 'react'
import axios from 'axios'
import { BUY } from '../utils/urls'
import { useNavigate } from 'react-router-dom'



export default function Buy() {
    document.title = 'Purchase'
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [example] = useState(JSON.parse(localStorage.getItem('cart')))
    const arr = [example.map((item) => item.food.attributes.price)]
    const price = arr[0].reduce((a, b) => a + b, 0)
    const navigate = useNavigate()

    function clickable(e) {
        e.preventDefault()
        if (name && address) {
            axios
                .post(BUY, {
                    data: {
                        name,
                        address,
                        products: example.map((item) => item.food.attributes.name + ' - ' + item.count + ' - ' + item.food.attributes.price),
                        price,
                    }
                })
                .then(() => {
                    localStorage.removeItem('cart')
                    navigate('/')
                    alert("Thank you for your purchase, your food will arrive soon")
                })
        } else {
            alert("Enter your identity")
        }
    }

    return (
        <div className='buy is-flex is-justify-content-center is-align-items-center'>
            <form className='buy-page p-5' onSubmit={(e) => clickable(e)}>
                <span className='icon icon-purchase is-clickable' onClick={() => navigate('/cart')}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
                <h1 className='title has-text-centered'>Purchase</h1>
                <input type="text" placeholder='enter your name...' className='input' onInput={(e) => setName(e.target.value)} value={name} />
                <input type="text" placeholder='address....' className='input mt-5' onInput={(e) => setAddress(e.target.value)} value={address} />
                <br /><br />
                <span className='is-flex is-justify-content-center'>
                    <button className='button' onClick={clickable}>Click</button>
                </span>
            </form>
        </div>
    )
}


