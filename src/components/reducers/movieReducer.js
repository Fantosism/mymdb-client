import {
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
} from '../actions/types'

const initialState = {
  movie: {},
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  // Handle these sync actions
  switch (action.type) {
    case ADD_MOVIE_REQUEST:
      return { ...state, loading: true }
    case ADD_MOVIE_SUCCESS:
      return { ...state, movie: action.movie, loading: false }
    case ADD_MOVIE_ERROR:
      return { ...state, error: action.error, loading: false }
    default:
      return state
  }
}
