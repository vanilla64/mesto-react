import React from 'react'
import Card from '../components/Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" 
          onClick={props.onEditAvatar}>
          <img className="profile__img" src={currentUser.avatar} alt="Аватар" />
        </div>
        <div className="profile__user-info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
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
          {
            props.cards.map((card) => (
              <Card 
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main 