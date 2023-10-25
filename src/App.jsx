
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import Footer from './componenets/Footer'
import Header from './componenets/Header'
import Contactos from './pages/Contactos'
import Inicio from './pages/Inicio'
import Peliculas from './pages/Peliculas'

function App() {


  return (
    <>
      <BrowserRouter>  
        <Header/>
        <Routes>
          <Route path='*'          element={<Inicio/>}></Route>
          <Route path='Inicio'  element={<Inicio/>}></Route>
          <Route path='Peliculas/:id'      element={<Peliculas/>}></Route>
          <Route path='Contactos' element={<Contactos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
   
      
    </>
  )
}

export default App
