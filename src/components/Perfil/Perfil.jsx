import { useNavigate } from "react-router-dom"
import style from './Perfil.module.css'

export default function Perfil(){

    const {contain, back} = style

    const navigate = useNavigate()
    if(localStorage.getItem("token")) return(
        <div className={contain} >
            <button className={back} onClick={() => navigate('/') } >BACK</button>
            <h1> {localStorage.getItem("user")} </h1>
        </div>
    )
    else return(
        <div>
        <h1>Debes iniciar sesion para acceder a tu perfil</h1>
        <button onClick={() => navigate('/login')} >Iniciar sesión</button>
        </div>
    )
}