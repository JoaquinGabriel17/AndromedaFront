import { useNavigate } from "react-router-dom"
import style from './Perfil.module.css'
import pic from '../../assets/wallpaperbetter.com_1920x1080.jpg'
import { useState } from "react"
import validate from "./validate"

export default function Perfil(){

    const {contain, back, perfil, menu, menuButton, perfilPic, editButton, inputGroup, input, label, radioLabel, mydict, editar} = style
    const [ edit, setEdit ] = useState(false)
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        number: "",
        profilePic: "",
        role: ""
    })
    const [ error, setError ] = useState({
        name: "",
        email: "",
        number: "",
        profilePic: "",
        role: ""
    })

    function formHandler(e){
        // e.preventDefault()
        // console.log(e.target.name,e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        
        if(e.target.name === "profilePic") {
            let reader = new FileReader()
            reader.onload = function(event){
                localStorage.setItem("profilePic", event.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
            return
        }
        
    }

    function perfilHandler(){
        if(!edit) return setEdit(true)
        setError(validate(form))

        
        

        if(Object.keys(validate(form)).length === 0) setEdit(false)
    }

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
            <button className={editButton} onClick={perfilHandler} >{edit ? "Guardar" : "Editar"}</button>
                {
                    edit ? (
                        <div className={editar} >
                        <div className={inputGroup}>
                            <label className={label}>Foto de perfil</label>
                            <input  name="profilePic" id="profilePic"  type="file" onChange={formHandler} />
                        </div>
                        { error.name ? <p style={{color: "red"}} >{error.name}</p> : ""}
                        <div className={inputGroup}>
                            <label className={label}>Nombre</label>
                            <input  name="name" id="name" className={input} type="text" onChange={formHandler}  />
                        </div>
                        <div className={mydict}>
	                        <div>
	            	            <label className={radioLabel} >
	            		        <input type="radio" name="radio" value="estudiante" required={true}/>
	            		        <span>Estudiante</span>
	            	            </label>
	            	            <label className={radioLabel} >
	            		        <input type="radio" name="radio" value="profesor"  required={true} />
	            		        <span>Profesor</span>
	            	            </label>
	                        </div>
                        </div>
                        { error.email ? <p style={{color: "red"}} >{error.email}</p> : ""}
                        <div className={inputGroup}>
                            <label className={label}>Email</label>
                            <input  name="email" id="email" className={input} type="email" onChange={formHandler} />
                        </div>
                        { error.number ? <p style={{color: "red"}} >{error.number}</p> : ""}
                        <div className={inputGroup}>
                            <label className={label}>Numero</label>
                            <input  name="number" id="number" className={input} type="number" onChange={formHandler} />
                        </div>
                        </div>
                    )
                    : (
                        <>
                            
                            <img src={localStorage.getItem("profilePic")} alt="foto de perfil" className={perfilPic} ></img>
                            <h1>Nombre: {localStorage.getItem("user")} </h1>
                            <h2>Rol: {localStorage.getItem("role")}</h2>
                            <h3>Email: alguien@example.com</h3>
                            <h3>Numero de teléfono: 123456789</h3>
                        </>
                    )
                        
                }
                
            </div>
            
        </div>
    )
}