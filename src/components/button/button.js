import React from 'react'

const Button = props => {
  return (
    <div className='level'>
      <button className='button level-item' onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
