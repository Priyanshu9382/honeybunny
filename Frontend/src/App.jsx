import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing"
import Menu from './pages/Menu'
import Auth from './pages/Auth'
import About from './pages/About'
import Order from './pages/Order'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </Router>
      
    
  )
}

export default App
