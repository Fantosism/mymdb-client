import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import searchMovies from '../actions/searchActions'
import './index.css'
import { connect } from 'react-redux'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  handleSearchChange = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  handleSearchSubmit = e => {
    e.preventDefault()
    const { searchTerm } = this.state
    this.props.history.push({
      search: `?query=${searchTerm}`,
    })
    const newQuery = {
      apiOne: {
        query: searchTerm.replace(/\s/g, '+'),
      },
      apiTwo: {
        t: searchTerm.replace(/\s/g, '+'),
      },
      apiThree: {
        q: searchTerm.replace(/\s/g, ' ') + ' trailer',
      },
    }

    this.props.dispatch(searchMovies(newQuery))
  }

  render() {
    const { searchTerm } = this.state

    return (
      <form onSubmit={this.handleSearchSubmit} type='submit' class='form field has-addons'>
        <p class='control'>
          <input
            className='input'
            type='text'
            placeholder='Search movies...'
            onChange={this.handleSearchChange}
            value={searchTerm}
          />
        </p>
        <p class='control'>
          <button class='button'>Search</button>
        </p>
      </form>
    )
  }
}

export default withRouter(connect()(SearchBar))

// export default withRouter(SearchBar)
