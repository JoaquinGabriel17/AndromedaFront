import { useNavigate } from "react-router-dom"
import style from './Login.module.css'
import { useState } from "react"
import validate from "./validate"

export default function Login(){

    const { login, contain, input, label, inputGroup, logButton, logContain } = style
    const navigate = useNavigate()
    const [ form, setForm ] = useState({
        name: "",
        password: ""
    })
    const [ error, setError ] = useState({
        name: "",
        password: "",
        // role: ""
    })

    
    
    function formHandler(e) {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // setError(validate(form))

    }

    async function loginHandler(){
        
        if(form.name === "" | form.password === ""){
             setError({
                ...error,
                name: "Debe llenar todos los campos"
             })
             return
        }
        // console.log(form)
        const add = validate(form)
        setError(validate(form))
            if(add.name === "" && add.password === "") {
                
                localStorage.setItem("user", form.name)
                
                navigate('/')
                setForm({name: "", password: ""})
            }
        
        // else alert("El nombre de usuario o la contraseña son invalidos")
    }

    

    return(
        <div className={contain} >
            
        <div className={login} >
            <div style={{ marginBottom: "440px", position: "absolute"}} >
        <h1 style={{cursor: "pointer"}} onClick={() => navigate('/')} >EduAndromeda</h1>
            <h1>Inicia sesión</h1>
            <h3 className={logContain} >¿No tienes una cuenta? <a className={logButton} onClick={() => navigate('/register')} >Registrate aquí</a> </h3>
            </div>
            <form  >
              <div className={inputGroup}>
              { error.name ? <p style={{color: "red"}} >{error.name}</p> : ""}
    <label className={label}>Nombre</label>
    <input  name="name" id="name" className={input} type="text" value={form.name} onChange={formHandler} />
    
    </div>

    <div className={inputGroup}>
    <label className={label}>Contraseña</label>
    <input  name="password" id="password" value={form.password} className={input} type="password" onChange={formHandler} />
    { error.password ? <p style={{color: "red"}} >{error.password}</p> : ""}
    </div>

            </form>
            <button onClick={loginHandler}  >Iniciar sesión</button>
        </div>
        </div>
    )
}