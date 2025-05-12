import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import {Home, Expo, Copa, Programa, Participa} from './components/pages'
import ScrollToTop from './components/ScrollToTop';


function App() {
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
