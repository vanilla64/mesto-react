import React from 'react'

function PopupWithForm(props) {
  return (
    <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>  
      <div className={`popup__container popup__container_type_${props.type}`}>
        <h2 className="popup__title"> {props.title} </h2>
        <div className="popup__close-btn" onClick={props.onClose}></div>
        <form onSubmit={props.onSubmit} name={`${props.name}`} className="popup__form" noValidate>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm