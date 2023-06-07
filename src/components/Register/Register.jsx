import { useNavigate } from "react-router-dom"
import style from './Register.module.css'
import { useState } from "react"
import validate from "./validate"

export default function Register(login){

    const { register, contain, inputGroup, regButton, logButton, logContain, label, input, radioLabel, mydict } = style
    const navigate = useNavigate()
    const [ form, setForm ] = useState({
        name: "",
        password: "",
        role: "",
        profilePic: "",
        email: ""
    })
    const [ error, setError ] = useState({
        name: "",
        password: "",
        profilePic: "",
        email: ""
    })

    
    
    function formHandler(e) {
        // console.log(1)
        if(e.target.value === "estudiante") return setForm({...form, role: "estudiante"}) 
        if(e.target.value === "profesor") return setForm({...form, role: "profesor"})
        if(e.target.name === "profilePic") {
            let reader = new FileReader()
            reader.onload = function(event){
                localStorage.setItem("profilePic", event.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
            return
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // console.log(form)
        setError(validate(form))
    }

    const registerHandler = async() => {
        await setError(validate(form)) 
        if(form.role === "") return alert("Debes elegir un rol")
        
        if(form.name === "" | form.name === "") return alert('Debe completar todos los campos')
        if(Object.keys(validate(form)).length === 0) {
            localStorage.setItem("user", form.name)
            localStorage.setItem("email", form.email)
            // localStorage.setItem("user", form.name)
            localStorage.setItem("role", form.role)
            navigate('/')
        }
        else alert('Debe completar todos los campos')
    }

    

    return(
        <div className={contain} >
            
            
        <div className={register} >
            <div style={{ marginBottom: "600px", position: "absolute"  }} >
        <h1 onClick={() => navigate('/')} style={{cursor: "pointer"}} >EduAndromeda</h1>
            {/* <h1>Registrate gratis y disfruta de cursos online</h1> */}
            <h3 className={logContain} >¿Tienes una cuenta? <a className={logButton} onClick={() => navigate('/login')} >Inicia sesión aquí</a> </h3>
            </div>
            <form  >
                {/* <img id="prueba" src={localStorage.getItem("profilePic")} alt="prueba" style={{width: "200px", height: "200px"}} ></img> */}
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
                    <input  name="name" id="name" className={input} type="text" required="true" onChange={formHandler} />
                    { error.name ? <p style={{color: "red"}} >{error.name}</p> : ""}
                </div>
                <div className={inputGroup}>
                    <label className={label}>Contraseña</label>
                    <input  name="password" id="password" className={input} type="password" required={true} onChange={formHandler} />
                    { error.password ? <p style={{color: "red"}} >{error.password}</p> : ""}
                </div>
                <div className={inputGroup}>
                    <label className={label}>Email</label>
                    <input  name="email" id="email" className={input} type="email" onChange={formHandler} />
                    { error.email ? <p style={{color: "red"}} >{error.email}</p> : ""}
                </div>
                <div className={inputGroup}>
                    <label className={label}>Foto de perfil</label>
                    <input  name="profilePic" id="profilePic" type="file" onChange={formHandler} />
                    {/* { error.password ? <p style={{color: "red"}} >{error.password}</p> : ""} */}
                </div>
                <div className={inputGroup}>
                    <label className={label}>Numero de teléfono</label>
                    <input  name="number" id="number" type="number" className={input} onChange={formHandler} />
                    {/* { error.password ? <p style={{color: "red"}} >{error.password}</p> : ""} */}
                </div>
                

            </form>
            <button onClick={registerHandler} className={regButton} >Registrarse</button>
        </div>
        </div>
    )
}