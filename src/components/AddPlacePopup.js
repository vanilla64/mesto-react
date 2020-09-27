import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
  const [location, setLocation] = React.useState('')
  const [link, setLink] = React.useState('')
  
  function handleChangeLocation(evt) {
    setLocation(evt.target.value)
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onAddPlace({
      location,
      link,
    })
  }

  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      type='form'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <label className="popup__label">
          <input 
            id="location-input" 
            value={location ? location : ''}
            onChange={handleChangeLocation}
            name="location" 
            className="popup__input popup__input_text_location"
            type="text"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30" />
          <span id="location-input-error" className="popup__error"></span>
        </label>
        <label className="popup__label">
          <input 
            id="link-input" 
            value={link ? link : ''}
            onChange={handleChangeLink}
            name="link" 
            className="popup__input popup__input_text_link"
            type="url"
            placeholder="Ссылка на картинку"
            required />
          <span id="link-input-error" className="popup__error"></span>
        </label>
        <button className="popup__btn" type="submit">Создать</button>
      </>
    </PopupWithForm>
  )
}

export default AddPlacePopup