import React from 'react'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  const currentUser = React.useContext(CurrentUserContext)
  
  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  function handleChangeName(evt) {
    setName(evt.target.value)
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onUpdateUser({
      name,
      about: description,
    })
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      type='form'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >

      <>
        <label className="popup__label">
          <input 
            id="name-input" 
            value={name ? name : ''} 
            onChange={handleChangeName}
            name="name" 
            className="popup__input popup__input_text_name"
            type="text"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40" />
          <span id="name-input-error" className="popup__error"></span>
        </label>
        <label className="popup__label">
          <input 
            id="job-input" 
            value={description ? description : ''}
            onChange={handleChangeDescription}
            name="job" 
            className="popup__input popup__input_text_job" type="text"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200" />
          <span id="job-input-error" className="popup__error"></span>
        </label>
        <button className="popup__btn" type="submit">Сохранить</button>
      </>

    </PopupWithForm>
  )
}

export default EditProfilePopup