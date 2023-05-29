import { useState } from 'react'
import style from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ log, setLog }){
    
    const navigate = useNavigate()
    const {navbar, buttonContain, buttonNav } = style
    // const [ log , setLog ] = useState(false)
    // setLog(true)

    return(
        <div>
            <nav className={navbar}>

                <h1>Andromeda</h1>
                <div className={buttonContain}>
                    { log ?
                    (   <> 
                        <button className={buttonNav} >Sobre Andromeda</button>
                        <button className={buttonNav} >Cursos</button>
                        <button className={buttonNav} onClick={() => {setLog(!log)}} >Perfil</button>
                        </>
                    )
                    :
                    (
                        <>
                            <button className={buttonNav} onClick={() => {navigate('/register')}} >Registrarse</button>
                            <button className={buttonNav} onClick={() => {navigate('/login')}} >Iniciar sesion</button>
                        </>

                    )

                    }
                    
                </div>

            </nav>
        </div>
    )
}