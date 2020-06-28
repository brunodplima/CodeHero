import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={Details} path="/:heroId" />
  </BrowserRouter>
)

export default Routes
