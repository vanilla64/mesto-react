import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

  const avatarRef = React.useRef()

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
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