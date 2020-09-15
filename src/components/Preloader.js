import React from 'react'
import imgPath from '../images/preloader.gif'

function Preloader() {
  return (
    <div className="preloader">
      <img className="preloader__img" src={imgPath} alt="Загрузка" />
    </div>
  )
}

export default Preloader