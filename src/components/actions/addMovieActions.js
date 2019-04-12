import axios from 'axios'
import { addMovieRequest, addMovieSuccess, addMovieError } from './types'
import { API_BASE_URL } from '../../config.js'

const searchMovies = query => dispatch => {
  dispatch(addMovieRequest())
  axios
    .post(`${API_BASE_URL}/api/movie/`, query)
    .then(res => dispatch(addMovieSuccess(res)))
    .then(res => {
      const { data } = res.movie
    })
    .catch(err => dispatch(addMovieError(err)))
}

export default searchMovies
