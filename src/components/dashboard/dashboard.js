import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'
import searchMovies from '../actions/searchActions'
import SearchFeed from '../search/searchFeed'
import './dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queries: {},
    }
  }

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  // onChange = e => this.setState({ queries: {[e.target.id]: e.target.value }})

  // onSubmit = e => {
  //   console.log('Made it to onSubmit')
  //   e.preventDefault()
  //   const newQuery = {
  //     primary_release_year : this.state.queries.query.year,
  //     sort_by: this.state.queries.query.sortBy,
  //     with_genres: this.state.queries.query.genres,
  //     with_keywords: this.state.queries.query.keywords,
  //     'vote_average.gte': this.state.queries.query.rating
  //   }
  //   console.log('newQuery', newQuery)
  //   this.props.searchMovies(newQuery)
  //   this.onSubmit = this.onSubmit.bind(this)
  // }
  onSearchClick = e => {
    e.preventDefault()
    // console.log(this.props)
    this.props.searchMovies()
  }
  // take a query as an object with kvp relating to api
  // queryApi = query => {
  //   // take a copy of existing state
  //   const things = {...this.state.queries}
  //   // Add a new kvp to our queries object from our query object
  //   query = {...things, query}
  //   // Set the new query object to state
  //   this.setState({ queries: query })
  // }

  render() {
    const { user } = this.props.auth
    return (
      <div>
        <div>{/* <Header authenticated={this.props.auth.authenticated} user={this.props.auth.user.id} /> */}</div>
        <div className='App-main'>
          <div className='App-sidebar-wrapper'>
            {/* <SideBar
              filters={this.state.filters}
              updateFilters={this.updateStateWithFilters}
              resetFilters={this.resetFilters}
            />
            <Footer /> */}
          </div>
          <div className='App-content-wrapper'>
            <SearchFeed />
            {this.props.SearchFeed}
            {/* <Search queries={this.state.queries} /> */}
            <div className='row'>
              {/* <div style={{ height: '75vh' }} className='col s3 left-align'>
                <UserSpace />
              </div> */}
              <div className='col s12 center-align'>
                <h4>
                  <b>Hey there,</b> {user.name.split(' ')[0]}
                  <p className='flow-text grey-text text-darken-1'>
                    You are logged in{' '}
                    <span className='emoji film' role='img' aria-label='movie-reel'>
                      🎥
                    </span>
                  </p>
                </h4>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                  }}
                  onClick={this.onLogoutClick}
                  className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { logoutUser, searchMovies }
)(Dashboard)
