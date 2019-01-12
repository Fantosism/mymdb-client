import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Splash extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <h3>
            <b>WHAT?</b> A movie database created with the{' '}
            <span style={{ fontFamily: 'monospace' }}>MERN</span> stack
          </h3>
          <p className='flow-text grey-text text-darken-1'>
            Search by any movie title and add to your favorites.
          </p>
          <p className='flow-text grey-text text-darken-1'>
            Make a (personalized) watch-list for all of your future streaming
            binges
          </p>
          <Link
            to='register'
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}
            className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
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
            className='btn btn-large waves-effect white hoverable black-text'>
            Log In
          </Link>
        </div>
      </div>
    )
  }
}
