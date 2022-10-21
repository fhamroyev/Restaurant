import React, { useState, useEffect } from 'react'
import Food from '../components/Food'
import { addFoods } from '../utils/addFoods'


export default function Foods({ foods }) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const [count] = useState(1)
    return (
        <div className='container'>
            {
                foods && foods.map((food) => (
                    <div key={food.id} >
                        <Food
                            id={food.id}
                            food={food}
                            description={food.attributes.description}
                            name={food.attributes.name}
                            addFoods={() => addFoods({ food, cart, setCart, count })}
                            thumb={food.attributes.img.data[0].attributes.formats.thumbnail.url}
                            price={food.attributes.price}
                        />
                    </div>
                ))
            }
        </div>
    )
}
