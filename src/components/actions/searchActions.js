import axios from 'axios'
import {
  searchMovieRequest,
  searchMovieSuccess,
  searchMovieError,
} from './types'
import { API_BASE_URL } from '../../config'

const searchMovies = query => dispatch => {
  dispatch(searchMovieRequest())
  axios
    .post(`${API_BASE_URL}/api/search/`, query)
    .then(res => dispatch(searchMovieSuccess(res)))
    .then(res => {
      const { data } = res.movie
      console.log(data.theMovieDB, data.openMovieDB, data.tmdbVideo)
    })
    .catch(err => dispatch(searchMovieError(err)))
}

export default searchMovies
