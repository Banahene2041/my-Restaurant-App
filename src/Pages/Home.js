import React from 'react'
import Popular from '../Components/Popular'
import Vegetables from '../Components/Vegetables'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div>
      <Vegetables />
      <Popular />
    </motion.div>
  )
}

export default Home
