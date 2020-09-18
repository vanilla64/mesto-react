import React from 'react'

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button className="element__delete-button"></button>
      <img onClick={handleClick} className="element__image" src={props.link} alt={props.name} />
      <div className="element__heading">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button"></button>
          <span className="element__like-counter">{parseInt(props.likes)}</span>
        </div>
      </div>
    </li>
  )
}

export default Card