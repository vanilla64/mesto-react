// import React from 'react'

export class Api {
  constructor({ url, token}) {
    this._url = url
    this._token = token
  }

  getInitialCards() {
    return fetch(`${this._url}${'/cards'}`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  changeLikeCardStatus(id, isLicked) {
    if (!isLicked) {
      return fetch(`${this._url}${'/cards/likes'}/${id}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
    } else if (isLicked) {
      return fetch(`${this._url}${'/cards/likes'}/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
    }
  }
  
  getUserInfo() {
    return fetch(`${this._url}${'/users/me'}`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}${'/users/me'}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      if (res.ok) {
        return res
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  setAvatar(avatar) {
    return fetch(`${this._url}${'/users/me/avatar'}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then((res) => {
      if (res.ok) {
        return res
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  createCard(name, link) {
    return fetch(`${this._url}${'/cards'}`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })  
    .catch((err) => console.log(err))
  }

  deleteCard(id) {
    return fetch(`${this._url}${'/cards'}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch((err) => console.log(err))
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-14', 
  token: '3afbb2b4-9ecc-4aaa-9813-505ad2c004fc'
})

export default api