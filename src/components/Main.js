import React from 'react'
import avatarPath from '../images/avatar.jpg'
import api from '../utils/Api'

function Main(props) {

  api.getUserInfo()
  .then(res => console.log(res))

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" 
          onClick={props.onEditAvatar}>
          <img className="profile__img" src={avatarPath} alt="Аватар" />
        </div>
        <div className="profile__user-info">
          <h1 className="profile__title">Жак</h1>
          <p className="profile__subtitle">Исследователь</p>
        </div>
        <button className="profile__edit-button"
          onClick={props.onEditProfile}></button>
        <div className="profile__container">
          <button className="profile__add-button" 
            onClick={props.onAddPlace}></button>
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