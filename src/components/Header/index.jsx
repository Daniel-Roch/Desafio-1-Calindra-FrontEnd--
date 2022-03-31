import React from 'react'
import './style.css'

import LogoIcon from '../../assets/img/C-icon.png'

const Header = () =>{
  return (
    <header className="header-main">

        <section className="section-titleLogo-header">
          <div className="div-threeDot-header">
            <div className="circle-threeDot-header"></div>
            <div className="circle-threeDot-header"></div>
            <div className="circle-threeDot-header"></div>
          </div>
          
          <img src={LogoIcon} alt="Z logo"/>

          <div className="div-titleLogo-header">
            <h1>Calindra</h1>
          </div>

        </section>

        <section className="section-nav-header">
          <p>Home</p>
          <p>Cases</p>
          <p>About</p>
          <p>Team</p>
          <p>Contact</p>
        </section>
    </header>
  )
}

export default Header