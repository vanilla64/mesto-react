import React from 'react'
<<<<<<< HEAD
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
=======
import Card from '../components/Card'
import api from '../utils/Api'

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription ] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(), 
      api.getInitialCards()
    ]).then((res) => {
      const [userData, cardData] = res

      setUserAvatar(userData.avatar)
      setUserName(userData.name)
      setUserDescription(userData.about)

      setCards(cardData)
    }).catch((err) => {console.log(err)})
  }, [])
>>>>>>> 3f30e74402537c2d2601126f5ca7607846da96e8

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" 
<<<<<<< HEAD
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
=======
          onClick={props.onEditAvatar}>
          <img className="profile__img" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__user-info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__edit-button"
          onClick={props.onEditProfile}></button>
        <div className="profile__container">
          <button className="profile__add-button" 
            onClick={props.onAddPlace}></button>
>>>>>>> 3f30e74402537c2d2601126f5ca7607846da96e8
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list">
<<<<<<< HEAD

=======
          {
            cards.map((card) => (
              <Card 
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                card={card}
                onCardClick={props.onCardClick}
              />
            ))
          }
>>>>>>> 3f30e74402537c2d2601126f5ca7607846da96e8
        </ul>
      </section>
    </main>
  )
}

export default Main 