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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App></App>} ></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/cursos/:id' element={<CursoDetail></CursoDetail>} ></Route>
      <Route path='/cursos' element={<AllCourses></AllCourses>} ></Route>
      <Route path='/perfil' element={<Perfil></Perfil>} ></Route>
    </Routes>
  </Router>,
)
