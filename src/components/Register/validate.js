export default function validate({name, password}){
    // console.log(form)
    let error = {
        name: "",
        password: ""
    }
    // setError({ name: "", password: ""})
    if(name.length < 3 | name.length > 12) error.name = "El nombre debe tener entre 3 y 12 caracteres"

    if(password.length < 3 | password.length > 12) error.password =  "La contraseña debe tener entre 3 y 12 caracteres"

    console.log(error)
    return error
}