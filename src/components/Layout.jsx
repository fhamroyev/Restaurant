import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children, btnFood, setFoods }) {
    return (
        <div>
            <Navbar btnFood={btnFood} setFoods={setFoods}/>
            <br />
            <div>{children}</div>
            <br />
            <Footer />
        </div>
    )
}
