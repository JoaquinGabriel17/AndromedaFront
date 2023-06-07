
let carrito = localStorage.getItem("carrito")
// if(carrito) carrito = JSON.parse(carrito)
// else localStorage.setItem("carrito", "[]")
const initialState = carrito


export default function reducer( state = initialState, { type, payload }){
    switch(type){
        case 'ADD':
            // console.log('holi', payload)
            // console.log(carrito)
            
            carrito.push(payload)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            // return [...state, payload]
            break;
        default:
            // console.log('holandaaa')
            return state
    }
}