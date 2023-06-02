import data from '../../assets/cursos.json'

export default function validate({name, password}){
    const users = data.users
    let error = {
        name: "",
        password: "",
        role: ""
    }
    let ver = users.find((user) => user.name === name)
    // console.log(ver)

    switch(true){
        case !ver:
            error.name = "Nombre o contraseña incorrectos"
            break;
        case ver.password !== password:
            error.name = "Nombre o contraseña incorrectos"
            break;
        default:
            error.name = ""
            error.password = ""
            localStorage.setItem("role", ver.role)
            break;
    }
    
    // console.log(error)


    return error
}