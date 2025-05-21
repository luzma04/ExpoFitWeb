import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import {Home, Expo, Copa, Programa, Participa} from './components/pages'
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch("https://expofitwebserver.onrender.com/")
      .then(res => console.log("Backend activado"))
      .catch(err => console.error("Error al hacer ping al backend", err));
  }, []);
  return (
    <>
      <div className='App'>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/expo' element={<Expo/>}/>
          <Route path='/copa' element={<Copa/>}/>
          <Route path='/programa' element={<Programa/>}/>
          <Route path='/participa' element={<Participa/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
