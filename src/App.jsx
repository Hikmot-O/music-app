import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import LOgin from './auth/LOgin'
import Home from './components/Home'
import Discover from './components/Discover'
import axios from 'axios'


function App() {
  // axios({
  //   method: 'post',
  //   url: 'https://accounts.spotify.com/api/token',
  //   data: {
  //     grant_type: client_credentials,
  //     client_id: clientID,
  //     client_secret: clientSecret
  //   }
  // });

  return (
    <Routes> 
      <Route path='/' element={<LOgin />} />
      <Route path='/home' element={<Home />} >
        {/* <Route path='/' element={<Discover/>} /> */}
      </Route>
    </Routes>
  )
}

export default App
