import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import EditAvatarPopup from '../components/EditAvatarPopup'
import EditProfilePopup from '../components/EditProfilePopup'
import AddPlacePopup from '../components/AddPlacePopup'
import ImagePopup from '../components/ImagePopup'
import api from '../utils/Api'
import CurrentUserContext from '../contexts/CurrentUserContext'

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res)
    })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
      setCards(res)
      }).catch((err) => {console.log(err)})
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id)

    api.changeLikeCardStatus(card._id, isLiked).then((res) => {
      const newCards = cards.map(
        (updCard) => updCard._id === card._id ? res : updCard)

      setCards(newCards)
    })
      .catch((err) => { console.log(err) })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter(item => item._id !== card._id)
      setCards(newCards)
      api.getInitialCards().then((res) => {
        setCards(res)
      })
    })
  }

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


  function handleUpdateUser(user) {
    api.setUserInfo(user.name, user.about)
      .then(() => {
        api.getUserInfo().then((res) => {
          setCurrentUser(res)
          closeAllPopups()
        })
      }).catch((err) => {console.log(err)})
  }

  function handleUpdateAvatar(url) {
    api.setAvatar(url.avatar)
      .then(() => {
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res)
            closeAllPopups()
          })
      }).catch((err) => {console.log(err)})
  }

  function handleAddPlaceSubmit(data) {
    api.createCard(data.location, data.link)
      .then((res) => {
        setCards([...cards, res])
        api.getInitialCards().then((res) => {
          setCards(res)
        })

        closeAllPopups()
      }).catch((err) => {console.log(err)})
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main  
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          />

        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

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
      </CurrentUserContext.Provider>
      
    </div>
  )
}

export default App
