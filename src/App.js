import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movies from './SingleMovie'

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/movies/:id' element={<Movies />} />
    </Routes>
  )
}

export default App
