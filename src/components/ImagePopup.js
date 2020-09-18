import React from 'react'

function ImagePopup(props) {
  return (
    <section className={props.card ? `popup popup_type_photo popup_opened` : `popup popup_type_photo`}>
      <figure className="popup__container popup__container_type_photo">
        <div className="popup__close-btn" onClick={props.onClose}></div>
        <img className="popup__image" src={props.card ? props.card.link : '#'} alt={props.card ? props.card.name : ''} />
        <figcaption className="popup__description">{props.card ? props.card.name : ''}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup