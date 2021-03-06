import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { connect } from 'react-redux'
import { API_BASE_URL } from './config'
import Splash from './components/splash'
import Register from './components/auth/register'
import Login from './components/auth/login'
import ProtectedRoute from './components/protected-route/protectedRoute'
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import Loading from './components/loading/loading'
import Card from './components/card/card'
import './index.css'
import WatchLater from './components/WatchLater'
import FavoriteMovie from './components/FavoriteMovie'

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken
//   setAuthToken(token)
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token)
//   // Set user and isAuthenticated
//   this.props.dispatch(setCurrentUser(decoded))

//   // Check for expired token
//   const currentTime = Date.now() / 1000 // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     this.props.dispatch(logoutUser())
//     // Redirect to login
//     window.location.href = './login'
//   }
// }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false,
      user: null,
      loading: true,
      watchList: {},
      ...this.defaultFilterState,
    }
  }
  defaultFilterState = {
    filters: {
      rating: {
        min: 5,
        max: 10,
      },
      runtime: {
        min: 45,
        max: 250,
      },
      sort_by: {
        value: 'vote_average',
        label: 'Rating',
      },
      order: {
        value: 'desc',
        label: 'Descending',
      },
      year: new Date().getFullYear(),
    },
  }

  updateStateWithFilters = filters => this.setState({ filters })

  handleUserCardsState = {
    // query db and find current users movie list
    // create new state obj by taking value of all movies in query
    // setState to new state obj
  }

  resetFilters = () => this.setState(this.defaultFilterState)

  addToUserCard = (movie, userCards) => {
    const onComplete = error => {
      if (error) {
        this._notificationSystem.addNotification({
          message: '😨',
          level: 'error',
        })
      } else {
        this._notificationSystem.addNotification({
          message: '😉',
          level: 'success',
        })
      }
    }
    // Make call to database and add selected movie to db
  }

  removeFromUserCard = (movie, userCards) => {
    // set variable = to query db for userID
    const onComplete = error => {
      if (error) {
        this._notificationSystem.addNotification({
          message: '😨',
          level: 'error',
        })
      } else {
        this._notificationSystem.addNotification({
          message: '😉',
          level: 'success',
        })
      }
    }
    // Remove from db the currently selected movie. Run onComplete when removing for errors.
    // Set new state through this.handleUserCardsState passing userId, userCards and new state (which should be userCards after being updated)
  }

  componentWillMount = () => {
    let token = localStorage.getItem('jwtToken')
    if (token) {
      // setAuthToken(token)

      // Axios.get(`${API_BASE_URL}/api/movie`)
      //   .then(res => console.log('hi i am res ', res))

      this.setState({
        loading: false,
        authenticated: true,
      })
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  componentDidMount = () => {
    this._notificationSystem = this.refs.notificationSystem
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <Router>
          <div className='App'>
            {/* <NavBar /> */}
            {/* <SearchFeed /> */}
            <Header {...this.props} />

            <Route exact path='/' render={({ history }) => <Splash history={history} {...this.props} />} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />

            <Route
              path='/movie/:id-:title'
              render={props => (
                <Card
                  {...props}
                  id={props.match.params.id}
                  authenticated={this.props.state.auth.authenticated}
                  onFavoriteSelect={selectedMovie => this.addToUserCard(selectedMovie)}
                  onFavoriteDeselect={selectedMovie => this.removeFromUserCard(selectedMovie)}
                  watchLater={this.state.watchList}
                />
              )}
            />
            <Route exact path='/watch-later' component={WatchLater} />
            <Route exact path='/favorites' component={FavoriteMovie} />
            <Switch>
              <ProtectedRoute path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { state: state }
}

export default connect(mapStateToProps)(App)
