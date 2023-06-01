import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import CursoDetail from './components/CursoDetail/CursoDetail.jsx'
import AllCourses from './components/AllCourses/AllCourses.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './index.css'
import Perfil from './components/Perfil/Perfil.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Carrito from './components/Carrito/Carrito.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <Router>
    
    {/* {console.log(window.location.pathname)} */}
    {/* { window.location.pathname === '/login'  ? console.log('holasion') : <NavBar></NavBar>} */}
    <NavBar></NavBar>
    <Routes>
    
      <Route path='/' element={<App></App>} ></Route>
      
      <Route path='/cursos/:id' element={<CursoDetail></CursoDetail>} ></Route>
      <Route path='/cursos' element={<AllCourses></AllCourses>} ></Route>
      <Route path='/perfil' element={<Perfil></Perfil>} ></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/carrito' element={<Carrito></Carrito>}></Route>
    </Routes>
  </Router>
  </Provider>
)
