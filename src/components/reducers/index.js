import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import searchReducer from './searchReducer'
import movieReducer from './movieReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  search: searchReducer,
  movie: movieReducer,
})
