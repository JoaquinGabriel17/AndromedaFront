export default function validate({ name, email, number, role, password }){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^\+(?:[0-9]){1,3}(?:\([0-9]+\))?(?:[-0-9\s])+$/;
    ;


    let errors = {}
    // console.log(name, email, number, role)
    switch(true){
        
        case !!name.length:
            if(name.length < 3 | name.length > 12) errors.name = "El nombre debe tener entre 3 y 12 caracteres"
        case !!password.length:
            if(password.length < 3 | name.length > 12) errors.password = "La contraseña debe tener entre 3 y 12 caracteres"
        case !!email.length:
            if(!emailRegex.test(email)) errors.email = "Email invalido"
            // break;
        case !!number.length:
            // if(!numberRegex.test(number)) errors.number = "Numero de teléfono invalido"
        case !!role.length:
            if(role === "estudiante") localStorage.setItem("role", "estudiante")
            if(role === "profesor") localStorage.setItem("role", "profesor")
            
    }
    return errors
}