import React from 'react'
import './App.css'

import Routes from './routes'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes />
      </div>
    </div>
  )
}

export default App
