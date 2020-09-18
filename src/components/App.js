import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import ImagePopup from '../components/ImagePopup'

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="page">
      <Header />
      <Main  
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='avatar-upd'
        title='Обновить аватар'
        type='confirm'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__label">
            <input id="link-input-avatar" name="linkavatar" className="popup__input popup__input_text_link" type="url"
              placeholder="Ссылка на картинку" required />
            <span id="link-input-avatar-error" className="popup__error"></span>
          </label>
          <button className="popup__btn" type="submit">Сохранить</button>
        </>
      </PopupWithForm>

      <PopupWithForm 
        name='edit-profile' 
        title='Редактировать профиль' 
        type='form'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >

        <>
          <label className="popup__label">
            <input id="name-input" name="name" className="popup__input popup__input_text_name"
              type="text"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40" />
            <span id="name-input-error" className="popup__error"></span>
          </label>
          <label className="popup__label">
            <input id="job-input" name="job" className="popup__input popup__input_text_job" type="text"
              placeholder="О себе"
              required
              minLength="2"
              maxLength="200" />
            <span id="job-input-error" className="popup__error"></span>
          </label>
          <button className="popup__btn" type="submit">Сохранить</button>
        </>

      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        type='form'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__label">
            <input id="location-input" name="location" className="popup__input popup__input_text_location"
              type="text"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30" />
            <span id="location-input-error" className="popup__error"></span>
          </label>
          <label className="popup__label">
            <input id="link-input" name="link" className="popup__input popup__input_text_link"
              type="url"
              placeholder="Ссылка на картинку"
              required />
            <span id="link-input-error" className="popup__error"></span>
          </label>
          <button className="popup__btn" type="submit">Создать</button>
        </>
      </PopupWithForm>

      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        type='confirm'
        onClose={closeAllPopups}
      >
        <>
          <button className="popup__btn popup__btn_type_confirm" type="submit">Да</button>
        </>
      </PopupWithForm>

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App
