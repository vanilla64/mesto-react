import React from 'react'
import avatarPath from '../images/avatar.jpg'

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar-upd').classList.add('popup_opened')
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened')
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened')
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" 
          onClick={handleEditAvatarClick}>
          <img className="profile__img" src={avatarPath} alt="Аватар" />
        </div>
        <div className="profile__user-info">
          <h1 className="profile__title">Жак</h1>
          <p className="profile__subtitle">Исследователь</p>
        </div>
        <button className="profile__edit-button"
          onClick={handleEditProfileClick}></button>
        <div className="profile__container">
          <button className="profile__add-button" 
            onClick={handleAddPlaceClick}></button>
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  )
}

export default Main 