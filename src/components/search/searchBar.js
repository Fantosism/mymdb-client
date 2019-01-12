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
    }
    console.log('newQuery', newQuery)
    let iceCream = this.props.dispatch(searchMovies(newQuery))
    console.log('searchMovies(newQuery)', iceCream)
    // this.props.history.push({
    //   pathname: `dashboard/search`,
    //   search: searchTerm,
    // })
  }

  render() {
    const { searchTerm } = this.state

    return (
      <div className='SearchBar-wrapper'>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            className='search-movie-input black'
            type='text'
            placeholder='Search movies...'
            onChange={this.handleSearchChange}
            value={searchTerm}
          />
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(SearchBar))

// export default withRouter(SearchBar)
