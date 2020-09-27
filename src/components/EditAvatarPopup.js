import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

  const [inputValue, setInputValue] = React.useState('')
  const avatarRef = React.useRef()

  function handleCange(evt) {
    setInputValue(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onUpdateAvatar({
      avatar: inputValue,
    })
  }

  return (
    <PopupWithForm
      name='avatar-upd'
      title='Обновить аватар'
      type='confirm'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >

      <>
        <label className="popup__label">
          <input 
            id="link-input-avatar" 
            name="linkavatar" 
            ref={avatarRef} 
            onChange={handleCange} 
            className="popup__input popup__input_text_link" 
            type="url"
            placeholder="Ссылка на картинку" 
            required />
          <span id="link-input-avatar-error" className="popup__error"></span>
        </label>
        <button className="popup__btn" type="submit">Сохранить</button>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup