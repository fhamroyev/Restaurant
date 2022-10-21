import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FOODS, DRINKS } from '../utils/urls'

export default function Cart() {
    document.title = 'Cart'
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )

    const [price, setPrice] = useState()

    const arr = [cart.map((item) => item.food.attributes.price)]
    const prices = arr[0].reduce((a, b) => a + b, 0)
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(FOODS)
            .then((res) => {
                setPrice(res.data.data)
            })
    }, [])



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    const removeFood = (item) => {
        setCart([...cart.filter((i) => item.food.id !== i.food.id)])
    }

    const increment = (foodItem) => {
        setCart(
            cart.map((item) => {
                if (foodItem.food.id === item.food.id) {
                    item.count += 1
                    price.map((food) => {
                        if (food.id === item.food.id) {
                            item.food.attributes.price += food.attributes.price
                        }
                    })
                }
                return item
            })
        )
    }


    const decrement = (foodItem) => {
        if (foodItem.count == 1) {
            removeFood(foodItem)
            return
        }

        setCart(
            cart.map((item) => {
                if (item.food.id === foodItem.food.id) {
                    item.count -= 1
                    price.map((food) => {
                        if (food.id === item.food.id) {
                            item.food.attributes.price -= food.attributes.price
                        }
                    })
                }
                return item
            }
            )
        )
    }


    return (
        <div className='carts'>
            <div className='is-flex is-justify-content-space-around'>
                <button className='button btn-nav' onClick={() => navigate('/')}>Back to main</button>
                {
                    cart.length ? (
                        <button className='button btn-nav' onClick={() => navigate('/purchase')}>Purchase</button>
                    )
                        :
                        (
                            null
                        )
                }
            </div>
            <br />
            <h1 className='title price'>{prices}</h1>
            <div>
                {
                    cart.length !== 0 ? (
                        cart.map((foodItem) => (
                            <div key={foodItem.food.id} className='is-flex cart m-auto is-align-items-center is-justify-content-space-around box'>
                                <figure>
                                    <Link to={`/food/${foodItem.food.id}`}>
                                        <img src={`http://localhost:1337${foodItem.food.attributes.img.data[0].attributes.url}`} alt={foodItem.food.attributes.name} width={"300px"} className="cart-img" />
                                    </Link>
                                </figure>
                                <h1 className='title res-title'>{foodItem.food.attributes.name}</h1>
                                <div className='is-flex is-align-items-center cartCount is-justify-content-space-around'>
                                    <button className='button cart-btn' onClick={() => increment(foodItem)}>+</button>
                                    <h1 className='title m-0 cart-count'>{foodItem.count}</h1>
                                    <button className='button cart-btn' onClick={() => decrement(foodItem)}>-</button>
                                </div>
                                <button className='button ' onClick={() => removeFood(foodItem)}>delete</button>
                            </div>
                        ))
                    )
                        : (
                            <div>
                                <h1 className='title has-text-centered'>Not found</h1>
                            </div>
                        )
                }
            </div>
        </div>
    )
}
