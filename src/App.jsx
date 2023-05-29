import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Carrousel from './components/Carrousel/Carrousel'


function App() {
  // const [count, setCount] = useState(0)
  const [ log, setLog ] = useState(false)

  
  
  return (
    <div>
      <NavBar log={log} setLog={setLog} ></NavBar>
      <div className='principal' >
        {
          log ?
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
        <button>Todos los cursos</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
      </div>
    </div>
  )
}

export default App
