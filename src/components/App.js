import React from 'react'
<<<<<<< HEAD
import Preloader from '../components/Preloader'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="page">
      <Preloader />
      <Header />
      <Main />
      <Footer />

      <section className="popup popup_type_edit-profile">
        <div className="popup__container popup__container_type_form">
          <h2 className="popup__title">Редактировать профиль</h2>
          <div className="popup__close-btn"></div>
          <form className="popup__form" noValidate>
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
          </form>
        </div>
      </section>

      <section className="popup popup_type_add-card">
        <div className="popup__container popup__container_type_form">
          <h2 className="popup__title">Новое место</h2>
          <div className="popup__close-btn"></div>
          <form className="popup__form" noValidate>
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
          </form>
        </div>
      </section>

      <section className="popup popup_type_photo">
        <figure className="popup__container popup__container_type_photo">
          <div className="popup__close-btn"></div>
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__description"></figcaption>
        </figure>
      </section>

      <section className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_confirm">
          <h2 className="popup__title popup__title_type_confirm">Вы уверены?</h2>
          <div className="popup__close-btn"></div>
          <form className="popup__form" noValidate>
            <button className="popup__btn popup__btn_type_confirm" type="submit">Да</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_avatar-upd">
        <div className="popup__container popup__container_type_confirm">
          <h2 className="popup__title popup__title_type_confirm">Обновить аватар</h2>
          <div className="popup__close-btn"></div>
          <form className="popup__form" noValidate>
            <label className="popup__label">
              <input id="link-input-avatar" name="linkavatar" className="popup__input popup__input_text_link" type="url"
                placeholder="Ссылка на картинку" required />
              <span id="link-input-avatar-error" className="popup__error"></span>
            </label>
            <button className="popup__btn" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <template id="card-template">
        <li className="element">
          <button className="element__delete-button"></button>
          <img className="element__image" src="#" alt="" />
          <div className="element__heading">
            <h2 className="element__title"> </h2>
            <div className="element__like-container">
              <button className="element__like-button"></button>
              <span className="element__like-counter">0</span>
            </div>
          </div>
        </li>
      </template>
=======
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import ImagePopup from '../components/ImagePopup'

function App() {

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
  
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

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
>>>>>>> 3f30e74402537c2d2601126f5ca7607846da96e8
    </div>
  )
}

export default App
