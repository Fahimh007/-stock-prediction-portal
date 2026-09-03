import React from 'react'

const Header = () => {
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
