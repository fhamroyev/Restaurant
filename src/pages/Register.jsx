import React, { useState } from 'react'
import axios from 'axios'
import { USER } from '../utils/urls'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    document.title = 'Register'
    const registerFunction = (event) => {
        event.preventDefault()
        if (username && email && password) {
            axios
                .post(USER, {
                    username,
                    email,
                    password,
                    confirmed: true
                })
                .then(() => {
                    alert('You have successfully registered')
                    localStorage.setItem('user', JSON.stringify(username))
                    navigate('/')
                })
                .catch(() => {
                    alert('Try again')
                })
        } else {
            alert('Enter your identity')
        }
    }
    return (
        <div className='register-container is-flex is-justify-content-center is-align-items-center'>
            <form className='register p-3' onSubmit={(event) => registerFunction(event)}>
                <span className='icon is-clickable' onClick={() => navigate('/')}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
                <h1 className='title has-text-centered'>Sign up</h1>
                <div className='inputs is-flex is-justify-content-space-around is-flex-direction-column m-auto'>
                    <input type="text" className='input' placeholder='enter your name...' onInput={(e) => setUsername(e.target.value)} value={username} />
                    <input type="email" className='input' placeholder='enter your email...' onInput={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" className='input' placeholder='eneter your password' onInput={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <span className='is-flex is-justify-content-center mt-5'>
                    <button className='button' onClick={(event) => registerFunction(event)}>Submit</button>
                </span>
            </form>
        </div>
    )
}
