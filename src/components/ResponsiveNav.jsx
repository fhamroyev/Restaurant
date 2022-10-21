import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ResponsiveNav({ setBoolean, btn }) {
    const [user] = useState(
        JSON.parse(localStorage.getItem('user'))
    )
    const navigate = useNavigate()
    const modal = () => {
        btn.current.className = 'btn-responsive button'
        setBoolean(false)
    }

    // const confirmationCart = () => {
    //     if (user) {
    //         navigate('/cart')
    //     } else {
    //         alert()
    //     }
    // }

    function logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        window.location.reload()
    }

    return (
        <div className='responsive has-background-white'>
            <span className='is-size-4 is-clickable has-text-black' onClick={() => modal()}>
                <ion-icon name="close-outline"></ion-icon>
            </span>
            {
                user ? (
                    <div className='is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around res-menu'>
                        <span className='is-flex is-flex-direction-column is-align-items-center'>
                            <h1 className='title' >
                                <ion-icon name="person-circle-outline"></ion-icon>
                            </h1>
                            <h1 className='subtitle has-text-black'>{user}</h1>
                        </span>
                        <div className='is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between res-btn'>
                            <span>
                                <button className='button' onClick={() => navigate('/cart')}>Cart</button>
                            </span>
                            <span>
                                <button className='button' onClick={() => logout()}>Log out</button>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className='is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around res-menu'>
                        <span>
                            <button className='button' onClick={() => alert('Enter log in')}>
                                Cart
                            </button>
                        </span>
                        <span>
                            <button className='button' onClick={() => navigate('/login')}>
                                Sign in
                            </button>
                        </span>
                        <span>
                            <button className='button' onClick={() => navigate('/register')}>
                                Sign up
                            </button>
                        </span>
                    </div>
                )
            }
        </div>
    )
}