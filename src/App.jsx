import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Crud from './Pages/Crud'


function App() {

  return (
    <>
   <Navbar/>
   
   <Routes>
    <Route path="/" element={<Home />} >
    <Route path="/about" element={<About />}/>
    <Route path="/crud" element={<Crud />}/>


    </Route>
   </Routes>
    </>
  )
}

export default App
