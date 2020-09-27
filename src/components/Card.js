import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = props.card.owner._id === currentUser._id
  const isLiked = props.card.likes.some(item => item._id === currentUser._id)

  const cardDeleteButtonClassName = 
    `${isOwn ? 
      'element__delete-button' : 
      'element__delete-button element__delete-button_hidden'
    }`
  const cardLikeButtonClassName = 
    `${isLiked ? 
      'element__like-button element__like-button_pressed' : 
      'element__like-button'
    }`

  function handleClick() {
    props.onCardClick(props.card)
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <li className="element">
      <button onClick={handleDeleteClick} className={cardDeleteButtonClassName}></button>
      <img onClick={handleClick} className="element__image" src={props.link} alt={props.name} />
      <div className="element__heading">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
          <span className="element__like-counter">{parseInt(props.likes)}</span>
        </div>
      </div>
    </li>
  )
}

export default Card