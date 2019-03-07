import React from 'react'
import CardItem from '../card/cardItem'

import './index.css'

const List = props => {
  const movieItems = props.list.map(movie => {
    return (
      <CardItem
        key={movie.id}
        id={movie.id}
        voteAverage={movie.voteAverage || movie.vote_average}
        posterPath={movie.posterPath || movie.poster_path}
        title={movie.title}
        authenticated={props.authenticated}
        // onFavoriteSelect={(selectedMovie, userList) =>
        //   this.props.addToUserCard(selectedMovie, userList)
        // }
        // onFavoriteDeselect={(selectedMovie, userList) =>
        //   this.props.removeFromUserCard(selectedMovie, userList)
        // }
        // favorites={props.favorites}
        // watchLater={props.watchLater}
      />
    )
  })

  return <div className='list-container black'>{movieItems}</div>
}

export default List
