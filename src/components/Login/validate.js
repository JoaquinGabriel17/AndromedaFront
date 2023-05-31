export default function validate({name, password}){
    const users = [{ name: "joaa", password: "asdasd" } ]
    let error = {
        name: "",
        password: ""
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
            break;
    }
    
    console.log(error)


    return error
}