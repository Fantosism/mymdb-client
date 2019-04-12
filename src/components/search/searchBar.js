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
      // pathname: `/search`,
      search: `?query=${searchTerm}`,
    })
    const newQuery = {
      apiOne: {
        query: searchTerm.replace(/\s/g, '+'),
        // "primary_release_year" : this.yearRef.current.value,
        // "sort_by": this.sortByRef.current.value,
        // "with_genres": this.genresRef.current.value,
        // "with_keywords": this.keywordsRef.current.value,
        // "vote_average.gte": this.ratingRef.current.value
      },
      apiTwo: {
        t: searchTerm.replace(/\s/g, '+'),
      },
      apiThree: {
        q: searchTerm.replace(/\s/g, ' ') + ' trailer',
      },
    }
    console.log('newQuery', newQuery)
    this.props.dispatch(searchMovies(newQuery))
    // this.props.history.push({
    //   pathname: `dashboard/search`,
    //   search: searchTerm,
    // })
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
