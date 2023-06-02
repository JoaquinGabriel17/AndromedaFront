import { useState } from 'react'
import style from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ log, setLog }){

    
    const navigate = useNavigate()
    const path = window.location.pathname
    const {navbar, buttonContain, buttonNav, input, form, inputBorder } = style
    // const [ log , setLog ] = useState(false)
    // setLog(true)

    return(
        <div style={path === '/login' || path === '/register' ? {display: "none"} :{}} >
            <nav className={navbar}>

                <h1>Andromeda</h1>

                <div className={form}>
                    <input className={input} placeholder="Busca algo..." required={false} type="text"></input>
                    <span className={inputBorder}>
                    </span>
                </div>

                <div className={buttonContain}>
                    { localStorage.getItem("role")?
                    (   <> 
                        <button className={buttonNav} onClick={() => navigate('/carrito')} >Carrito</button>
                        <button className={buttonNav} >Sobre Andromeda</button>
                        <button className={buttonNav} onClick={() => {
                            localStorage.setItem("role", "")
                            localStorage.setItem("user", "")
                            navigate('/login')
                            }} >Log out</button>
                        <button className={buttonNav} onClick={() => localStorage.getItem("role") ? navigate("/perfil") : alert("Debes iniciar sesion para acceder a tu cuenta")} >Mi cuenta</button>
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