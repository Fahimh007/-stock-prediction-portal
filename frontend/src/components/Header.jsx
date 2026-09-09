import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import Button from './Button'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false)
  }

  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>
            <div>
              {isLoggedIn ? (
                <>
                    <Button text='Dashboard' class="btn-info" url="/dashboard" />
                    &nbsp;
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                    <Button text='Login' class="btn-outline-info" url="/login" />
                    &nbsp;
                    <Button text='Register' class="btn-info" url="/register" />
                </>
              )}
            </div>
        </nav>
    </>
  )
}

export default Header
