import React, { Component } from 'react'
import SearchBar from '../search/searchBar'
import { Link } from 'react-router-dom'
import './index.css'
import UserMenu from '../userMenu/userMenu'

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
      <div className='App-header'>
        <SearchBar />
        {this.props.authenticated ? (
          <div className='user-wrapper'>
            {/* {this.props.user.photoURL */}
            <i
              onClick={this.toggleUserMenu}
              className='material-icons'
              width='75'
              height='75'
              padding='1rem'>
              menu
            </i>

            {this.props.user.name ? (
              <UserMenu
                name={this.props.user.name}
                isOpen={this.state.userMenuOpen}
              />
            ) : (
              <UserMenu
                name={this.props.user.name}
                isOpen={this.state.userMenuOpen}
              />
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
    )
  }
}

export default Header
