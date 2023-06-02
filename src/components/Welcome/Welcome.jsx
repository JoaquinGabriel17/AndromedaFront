import { useNavigate } from 'react-router-dom'
import style from './Welcome.module.css'

export default function Welcome(){

    const { contain, loginDirect } = style
    const navigate = useNavigate()
    return(
        <div className={contain} >
            {
                localStorage.getItem("role") ? (
                    <div>
                        <h1>Bienvenido {localStorage.getItem("user")}</h1>
                        <h3>Reanuda tus cursos</h3>
                        <h3>*cursos en curso*</h3>
                    </div>
                    )
                    : (
                        <div>
                            <h1>Hola</h1>
                            <p><a onClick={() => navigate('/register')} className={loginDirect} >Registrate</a> para obtener acceso a cursos sobre cosas maravillosas, o <a onClick={() => navigate('/login')} className={loginDirect} >inicia sesión aquí</a></p>
                        </div>
                    )
            }
            
        </div>
    )
}