import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FOOD, FOODS } from '../utils/urls'
import axios from 'axios'
import { addFoods } from '../utils/addFoods'

export default function FoodDetail() {
    const [food, setFood] = useState()
    const [user] = useState(
        JSON.parse(localStorage.getItem('user'))
    )
    document.title = 'Food'
    const [price, setPrice] = useState()
    const params = useParams()
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(FOOD.replace('id', params.id))
            .then((res) => {
                setFood(res.data.data)
            })

        axios
            .get(FOODS)
            .then((res) => {
                setPrice(res.data.data)
            })
    }, [])


    const [count] = useState(1)

    function confirmation() {
        if (user) {
            navigate('/cart')
        } else {
            alert('Enter log in')
        }
    }

    function confirmationTwo(food) {
        if (user) {
            addFoods({ cart, setCart, food, count })
            cart.map((item) => {
                price.map((pras) => {
                    if (item.food.id === pras.id) {
                        item.food.attributes.price += pras.attributes.price
                    }
                })
            })
        } else {
            alert('Enter log in')
        }
    }
    return (
        <div>
            <div className='is-flex is-align-items-center columns detail-responsive'>
                <div className='box column content'>
                    <button className='button' onClick={() => navigate('/')}>Back to main</button>
                    {
                        food && (
                            <div className='is-flex is-justify-content-center is-align-items-center'>
                                <img src={`http://localhost:1337${food.attributes.img.data[0].attributes.url}`} alt={food.attributes.name} width={'520px'} className="detail-img" />
                            </div>
                        )
                    }
                </div>
                <div className='box content-food column'>
                    {
                        food && (
                            <div className='food-content'>

                                <h1 className='title'>{food.attributes.name.charAt(0).toUpperCase() + food.attributes.name.slice(1)}</h1>
                                <h1 className='title'>{food.attributes.price} soum</h1>
                                <h1 className='is-size-4 has-text-black'>{food.attributes.description}</h1>
                                <div className='is-flex is-flex-direction-column btn-food is-justify-content-space-around'>
                                    <button className='button' onClick={() => confirmationTwo(food)}>Add to cart</button>
                                    <button className='button' onClick={() => confirmation()}>Cart</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
