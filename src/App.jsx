// import { useState } from 'react'
import './App.css'
// import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Routes> 
      <Route path='/' element={<Home />} >
        <Route />
      </Route>
    </Routes>
  )
}

export default App
