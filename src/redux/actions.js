const ADD = 'ADD'
const DELETE = 'DELETE'

// export function add(prod){
//     return { type: ADD, payload: prod }
// }

export function deleteProd(id){
    let carrito = localStorage.getItem("carrito")
    carrito = JSON.parse(carrito)
    if(carrito) ""
    else localStorage.setItem("carrito", '[]')
    let index = carrito.indexOf(id)
    // console.log(carrito.slice(index, index +1 ))
    if(index >= 0) carrito.splice(index, 1)
    else return alert("El curso no se encuentra en tu carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

export function add(id){
    let carrito = localStorage.getItem("carrito")
    if(carrito) carrito = JSON.parse(carrito)
    else localStorage.setItem("carrito", '[]')
    if(carrito.includes(id)) return alert("Este curso ya se encuentra en tu carrito")
    else carrito.push(id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
