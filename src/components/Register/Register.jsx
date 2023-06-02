import { useNavigate } from "react-router-dom"
import style from './Register.module.css'
import { useState } from "react"
import validate from "./validate"

export default function Register(login){

    const { register, contain, inputGroup, regButton, logButton, logContain, label, input, radioLabel, mydict } = style
    const [ form, setForm ] = useState({
        name: "",
        password: "",
        role: ""
    })
    const [ error, setError ] = useState({
        name: "",
        password: "",
    })

    
    
    function formHandler(e) {
        if(e.target.value === "estudiante") return setForm({...form, role: "estudiante"}) 
        if(e.target.value === "profesor") return setForm({...form, role: "profesor"})
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setError(validate(form))
    }

    const registerHandler = async() => {
        await setError(validate(form)) 
        console.log(error)
        console.log(form.role)
        if(form.role === "") return alert("Debes elegir un rol")
        
        if(form.name === "" | form.name === "") return alert('Debe completar todos los campos')
        if(error.name === "" && error.password === "") {
            localStorage.setItem("user", form.name)
            localStorage.setItem("role", form.role)
            navigate('/')
        }
        else alert('Debe completar todos los campos')
    }

    const navigate = useNavigate()

    return(
        <div className={contain} >
            
            
        <div className={register} >
            <div style={{ marginBottom: "440px", position: "absolute"  }} >
        <h1 onClick={() => navigate('/')} style={{cursor: "pointer"}} >EduAndromeda</h1>
            {/* <h1>Registrate gratis y disfruta de cursos online</h1> */}
            <h3 className={logContain} >¿Tienes una cuenta? <a className={logButton} onClick={() => navigate('/login')} >Inicia sesión aquí</a> </h3>
            </div>
            <form  >
            <div className={mydict}>
	            <div>
                        {/* <h3>Elige un rol: </h3> */}
	            	<label className={radioLabel} >
	            		<input type="radio" name="radio" value="estudiante" onChange={formHandler} required={true}/>
	            		<span>Estudiante</span>
	            	</label>
	            	<label className={radioLabel} >
	            		<input type="radio" name="radio" value="profesor" onChange={formHandler} required={true} />
	            		<span>Profesor</span>
	            	</label>
	            </div>
            </div>
                <div className={inputGroup}>
                    <label className={label}>Nombre</label>
                    <input  name="name" id="name" className={input} type="text" onChange={formHandler} />
                    { error.name ? <p style={{color: "red"}} >{error.name}</p> : ""}
                </div>
                <div className={inputGroup}>
                    <label className={label}>Contraseña</label>
                    <input  name="password" id="password" className={input} type="password" onChange={formHandler} />
                    { error.password ? <p style={{color: "red"}} >{error.password}</p> : ""}
                </div>

            </form>
            <button onClick={registerHandler} className={regButton} >Registrarse</button>
        </div>
        </div>
    )
}