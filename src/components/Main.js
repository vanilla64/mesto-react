import React from 'react'
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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" 
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
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list">
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
        </ul>
      </section>
    </main>
  )
}

export default Main 