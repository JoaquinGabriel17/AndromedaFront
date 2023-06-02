import { useNavigate } from "react-router-dom"
import style from './Perfil.module.css'
import pic from '../../assets/wallpaperbetter.com_1920x1080.jpg'

export default function Perfil(){

    const {contain, back, perfil, menu, menuButton, perfilPic} = style

    const navigate = useNavigate()
    if(localStorage.getItem("token")) return(
        <div className={contain} >
            <button className={back} onClick={() => { navigate('/') }} >BACK</button>
            <div className={menu} >
                <button className={menuButton} >Perfil</button>
                <button className={menuButton} >Mis cursos</button>
                <button className={menuButton} >Certificaciones</button>
                <button className={menuButton} >Historial de pagos</button>
            </div>
            <div className={perfil} >
                <img src={pic} alt="foto de perfil" className={perfilPic} ></img>
                
                <h1>Nombre: {localStorage.getItem("user")} </h1>
                <h2>Rol: {localStorage.getItem("role")}</h2>
                <h3>Email: alguien@example.com</h3>
                <h3>Numero de teléfono: 123456789</h3>
            </div>
            
        </div>
    )
}