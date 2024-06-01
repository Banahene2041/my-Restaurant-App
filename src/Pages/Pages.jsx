import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Details from './Details'
import { AnimatePresence } from 'framer-motion'

const Pages = () => {
  const location = useLocation()
  return (
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </AnimatePresence>
  )
}

export default Pages
