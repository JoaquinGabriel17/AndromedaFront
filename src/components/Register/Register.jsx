import { useNavigate } from "react-router-dom"
import style from './Register.module.css'
import { useState } from "react"

export default function Register(login){

    const { register, contain } = style
    const [ form, setForm ] = useState({
        name: "",
        password: ""
    })
    const [ error, setError ] = useState({
        name: "",
        password: ""
    })

    function validate({name, password}){
        setError({ name: "", password: ""})
        if(name.length < 3 | name.length > 12) setError({
            ...error,
            name: "El nombre debe tener entre 3 y 12 caracteres"
        }) 
        if(password.length < 3 | password.length > 12) setError({
            ...error,
            password: "La contraseña debe tener entre 3 y 12 caracteres"
        })
    }
    
    function formHandler(e) {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        validate(form)
    }

    function registerHandler(){
        if(error.name === "" && error.password === "") navigate('/')
    }

    const navigate = useNavigate()

    return(
        <div className={contain} >
        <div className={register} >
            <button style={{float: "left"}} onClick={() => { navigate('/') }} >BACK</button>
            <form>
                <label>Nombre: <input type="text" name="name" value={form.name} onChange={formHandler} ></input></label>
                { error.name ? <h4 style={{color: "red"}} >{error.name}</h4> : ""}
                <br></br>
                <label>Contraseña: <input type="password" name="password" value={form.password} onChange={formHandler} ></input></label>
                { error.password ? <h5 style={{color: "red"}} >{error.password}</h5> : ""}
            </form>
            <button onClick={registerHandler} >Registrarse</button>
        </div>
        </div>
    )
}