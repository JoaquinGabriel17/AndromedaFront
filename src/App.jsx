import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Carrousel from './components/Carrousel/Carrousel'
import { useNavigate } from 'react-router-dom'
import Comentarios from './components/ComentsBox/Comentarios'


function App() {
  // const [count, setCount] = useState(0)
  const [ log, setLog ] = useState(false)
  const navigate = useNavigate()
  let carrito =   localStorage.getItem("carrito")
  if(!carrito) localStorage.setItem("carrito", "[]")
  

  
  
  return (
    <div>
      {/* <NavBar log={log} setLog={setLog} ></NavBar> */}
      <div className='principal' >
        {
          localStorage.getItem("token") === false ?
          (
            <>
            <h1>Registrate y accede a mas de 1000 cursos gratuitos</h1>
            </>
          )
          :
          ""
        }
        <h1>Cursos destacados</h1>
        <div className='cursosDestacados' >
          <Carrousel></Carrousel>
          
        </div>
        <button className='allCourses' onClick={() => navigate('/cursos')} >Todos los cursos</button>   
      </div>
      <div className='divisor' >
      </div>
      <Comentarios></Comentarios>
    </div>
  )
}

export default App
