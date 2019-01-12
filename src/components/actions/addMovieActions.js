import axios from 'axios'
import { addMovieRequest, addMovieSuccess, addMovieError } from './types'
import { API_BASE_URL } from '../../config.js'

const searchMovies = query => dispatch => {
  console.log('query111', query)
  dispatch(addMovieRequest())
  axios
    .post(`https://mymdb-server.herokuapp.com/api/movie/`, query)
    .then(res => dispatch(addMovieSuccess(res)))
    .then(res => {
      const { data } = res.movie
      console.log(data.theMovieDB, data.openMovieDB, data.tmdbVideo)
    })
    .catch(err => dispatch(addMovieError(err)))
}

export default searchMovies
