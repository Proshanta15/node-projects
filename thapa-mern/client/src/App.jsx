import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Service from './pages/Service'
import './style/index.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='app-shell'>
        <Navbar />
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
     
    </>
  )
}

export default App
