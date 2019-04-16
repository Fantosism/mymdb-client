import React, { Component } from 'react'
import SearchBar from '../search/searchBar'
import { Link, Redirect } from 'react-router-dom'
import './index.css'
import UserMenu from '../userMenu/userMenu'
import '../navbar.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userMenuOpen: false,
    }
  }
  logoutUser = async () => {
    await localStorage.removeItem('jwtToken')
    return <Redirect to='/' />
  }
  render() {
    if (this.props.state.auth.authenticated) {
      return (
        <div className='flex-container'>
          <div className='navbar-container'>
            <nav class='level'>
              <div class='level-left'>
                <div class='level-item'>
                  <SearchBar />
                </div>
              </div>
              <div class='level-item'>
                <Link
                  to='/'
                  style={{
                    fontFamily: 'monospace',
                    textDecoration: 'none',
                  }}
                  className='title level-item has-text-centered big-text-padding'>
                  <i className='material-icons'>movie</i>
                  MyMDB
                </Link>
              </div>

              <div class='level-right'>
                <Link className='title level-item has-text-centered' to='/favorites'>
                  Favorites
                </Link>
                <Link className='title level-item has-text-centered' to='/watch-later'>
                  Watchlist
                </Link>

                <a className='title level-item has-text-centered' href='#logout' onClick={() => this.logoutUser()}>
                  Logout
                </a>
                <a href='#' />
              </div>
            </nav>
          </div>
        </div>
      )
    } else {
      return (
        <div className='flex-container'>
          <div className='navbar-container'>
            <nav class='level'>
              <div class='level-item'>
                <Link
                  to='/'
                  style={{
                    fontFamily: 'monospace',
                    textDecoration: 'none',
                  }}
                  className='title level-item has-text-centered big-text'>
                  <i className='material-icons'>movie</i>
                  MyMDB
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )
    }
  }
}

export default Header
