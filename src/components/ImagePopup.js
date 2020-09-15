import React from 'react';

function ImagePopup(props) {
  return (
    <section className="popup popup_type_photo">
      <figure className="popup__container popup__container_type_photo">
        <div className="popup__close-btn"></div>
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__description"></figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup