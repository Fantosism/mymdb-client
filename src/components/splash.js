import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

const Splash = props => {
  let token = localStorage.getItem('jwtToken')

  if (token && props.authenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <div className='row'>
      <div className='col s12 center-align'>
        <h3>
          <b>WHAT?</b> A movie database created with the <span style={{ fontFamily: 'monospace' }}>MERN</span> stack
        </h3>
        <p className='main-content'>Search by any movie title and add to your favorites.</p>
        <p className='main-content'>Make a (personalized) watch-list for all of your future streaming binges</p>
        <div className='container padding-top'>
          <Link
            to='register'
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}
            className='button is-primary'>
            Register
          </Link>
          <Link
            to='login'
            style={{
              marginLeft: '2rem',
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}
            className='button is-danger'>
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Splash
