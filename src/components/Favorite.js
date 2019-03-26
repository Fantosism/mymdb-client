import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import List from './list/list'

export default function FavoriteMovie() {
  const [movieArr, setMovieArr] = useState(null)
  // let movieArr = null
  let temp = localStorage.getItem('jwtToken')
  const fetchMovieData = async temp => {
    await axios({
      method: 'post',
      url: `${API_BASE_URL}/api/movie/favorite`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: temp,
      },
    }).then(res => console.log(res))
  //   .then(res => {
  //     setMovieArr(res.data[0].movies)
  //   })
  // }

  // useEffect(() => {
  //   fetchMovieData(temp)
  // }, [])

  // if (movieArr) {
  //   return (
  //     <div className='Watch-Later-Container'>
  //       <List list={movieArr} />
  //     </div>
  //   )
  // } else {
  //   return <div className='loading'>Loading</div>
  // }
}
