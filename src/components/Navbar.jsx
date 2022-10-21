import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { FOODS } from '../utils/urls'
import { useNavigate } from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'


export default function Navbar({ btnFood, setFoods }) {
    const [value, setValue] = useState()
    const [user] = useState(
        JSON.parse(localStorage.getItem('user'))
    )
    const navigate = useNavigate()

    const nav = useRef()

    const username = useRef()

    const usericon = useRef()

    const btn = useRef()

    const [boolean, setBoolean] = useState(false)

    function clickable() {
        setBoolean(true)
        btn.current.className = 'example'
    }


    useEffect(() => {
        axios
            .get(FOODS + `&filters[name][$containsi]=${value}`)
            .then((res) => {
                setFoods(res.data.data)
            })
    }, [value])


    const removeUser = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        window.location.reload()
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                nav.current.className = 'nav-second'
                username.current.className = 'username'
                usericon.current.className = 'usericon'
            } else {
                nav.current.className = 'nav'
                username.current.className = 'subtitle has-text-black'
                usericon.current.className = 'title'
            }
        })
    }, [])

    return (
        <div className='nav' ref={nav}>
            <div className='navbar-page is-flex is-justify-content-space-between is-align-items-center'>
                <h1 className='nav-title is-size-2 is-clickable' onClick={btnFood}>Chuqur</h1>
                <input type="text" className='input input-tag' placeholder='search food...' onInput={(e) => setValue(e.target.value)} value={value} />
                {
                    user ? (
                        <div className='user-content is-flex is-justify-content-space-between is-align-items-center'>
                            <button className='button btn' onClick={() => navigate('/cart')}>Cart</button>
                            <button className='button btn' onClick={removeUser}>Log out</button>
                            <span className='is-flex is-flex-direction-column is-align-items-center user-icon'>
                                <h1 className='title' ref={usericon}>
                                    <ion-icon name="person-circle-outline"></ion-icon>
                                </h1>
                                <h1 className='subtitle has-text-black' ref={username}>{user}</h1>
                            </span>
                        </div>
                    )
                        : (
                            <div className='allBtn is-flex is-justify-content-space-around'>
                                <button className='button btn' onClick={() => alert('Enter log in')}>Cart</button>
                                <button className='button btn' onClick={() => navigate('/login')}>Sign in</button>
                                <button className='button btn' onClick={() => navigate('/register')}>Sign up</button>
                            </div>
                        )
                }
                <button className='btn-responsive button' onClick={() => clickable()} ref={btn}>
                    <ion-icon name="list-outline"></ion-icon>
                </button>
                {
                    boolean ? <ResponsiveNav setBoolean={setBoolean} btn={btn} /> : null
                }
            </div>
        </div>
    )
}
