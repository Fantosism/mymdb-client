import React, { Component } from 'react'
import SearchBar from '../search/searchBar'
import { Link } from 'react-router-dom'
import './index.css'
import UserMenu from '../userMenu/userMenu'
import '../navbar.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      userMenuOpen: false,
    }
  }
  toggleUserMenu = () => {
    this.setState({
      userMenuOpen: !this.state.userMenuOpen,
    })
  }
  render() {
    return (
      <nav className='z-depth-2 nav-extended'>
        <div className='nav-wrapper white'>
          <Link
            to='/'
            style={{
              fontFamily: 'monospace',
              textDecoration: 'none',
            }}
            className='col s5 brand-logo center black-text'>
            <i className='material-icons'>movie</i>
            MyMDB
          </Link>
          <SearchBar />

          {this.props.state.auth.authenticated ? (
            <div className='user-wrapper'>
              {/* {this.props.user.photoURL */}
              <i onClick={this.toggleUserMenu} className='material-icons' width='75' height='75' padding='1rem'>
                menu
              </i>

              {this.props.state.auth.user.name ? (
                <UserMenu name={this.props.state.auth.user.name} isOpen={this.state.userMenuOpen} />
              ) : (
                <UserMenu name={this.props.state.auth.user.name} isOpen={this.state.userMenuOpen} />
              )}
            </div>
          ) : (
            <div className='login-tickets-wrapper'>
              <Link className='' to='/login'>
                <span className='login-tickets-label'>Register / Log in</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    )
  }
}

export default Header
