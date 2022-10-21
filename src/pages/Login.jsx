import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    document.title = 'Login'

    const loginPage = (e) => {
        e.preventDefault()

        if (username && email && password) {
            axios
                .post('http://localhost:1337/api/auth/local', {
                    identifier: email,
                    password
                })
                .then(() => {
                    alert('You are on the list')
                    localStorage.setItem('user', JSON.stringify(username))
                    navigate('/')
                })
                .catch(() => {
                    alert('Try again')
                    setUsername('')
                    setEmail('')
                    setPassword('')
                })
        } else {
            alert('Enter your identity')
        }
    }

    return (
        <div className='login-container is-flex is-justify-content-center is-align-items-center'>
            <form className='login' onSubmit={(e) => loginPage(e)}>
                <span className='icon is-clickable' onClick={() => navigate('/')}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
                <h1 className='title has-text-centered has-text-black'>Sign in</h1>
                <div className='login-inputs m-auto is-flex is-flex-direction-column is-justify-content-space-around'>
                    <input type="text" placeholder='enter your username...' className='input' onInput={(e) => setUsername(e.target.value)} value={username} />
                    <input type="email" placeholder='enter your email...' className='input' onInput={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder='enter your password' className='input' onInput={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <span className='is-flex is-justify-content-center'>
                    <button className='button' onClick={(e) => loginPage(e)}>Submit</button>
                </span>
            </form>
        </div>
    )
}
