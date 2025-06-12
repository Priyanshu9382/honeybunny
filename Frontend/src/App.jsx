import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Landing from "./pages/Landing"
import Menu from './pages/Menu'
import Login from './pages/Login'
import About from './pages/About'
import Order from './pages/Order'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Signup from './pages/Signup'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Landing/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
      
    
  )
}

export default App
