import React from 'react'

import './Header.css'

import logo from '../../assets/logo.png'

const Header = () => (
  <header id="app-header">
    <div className="logo">
      <img src={logo} alt="Objective" />
    </div>
    <div className="user-info">
      <div className="user-text">
        <span className="user-name">Bruno Lima</span>
        <span className="user-project">Teste de Front-end</span>
      </div>
      <span className="user-initials">BL</span>
    </div>
  </header>
)

export default Header
