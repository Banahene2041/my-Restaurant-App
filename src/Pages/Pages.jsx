import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from './Details'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}

export default Pages
