import { useNavigate } from "react-router-dom"
import style from './Carrito.module.css'
import data from '../../assets/cursos.json'
import { deleteProd } from '../../redux/actions'
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Carrito(){

    const { contain, product, productos, back, disabledButton } = style
    const { cursos } = data
    const [ prod, setProd ] = useState([])
    const select = []
    let totalPrice = 0
    let b = 0
    //  localStorage.setItem("carrito","[]")
    let carrito = localStorage.getItem("carrito")
    if(carrito) carrito = JSON.parse(carrito)
    carrito.forEach((id) => {
        const curso = cursos.find((curs) => Number(curs.id) === Number(id))
        select.push(curso)
    })

    
    useEffect(() => {
        
        


        setProd([...prod, ...select])
        // async function getToken(){
        //     await axios('https://api.gocoin.com/api/v1/oauth/token',{
        //         method: 'GET',

        //     })
        // }
        
    },[])
    const navigate = useNavigate()

    function deleteHandler(e){
        prod.splice(e.target.id, 1)
        setProd([...prod])
        // console.log(carrito)
        carrito.splice(e.target.id, 1)
        // console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    function paiHandler(){
        if(prod.length === 0) return  
        return alert("Nuestra pasarela de pagos esta deshabilitada por cuestiones monetarias intentelo mas tarde")  
    }
    return(
        <div className={contain} >
            <button onClick={() => navigate('/')} className={back} >BACK</button>

            <div className={productos} >
                { prod.length ? prod.map((course, index) => {
                    totalPrice += 20
                    return(
                        <div key={course.id} className={product} >
                            <h1>{course.id}</h1>
                            <h3>{course.name}</h3>
                            <h3>{course.autor}</h3>
                            <h3>price: $20</h3>
                            <button id={index} onClick={deleteHandler} > Eliminar </button>
                        </div>
                    )
                })
                : <h1>No hay productos en el carrito</h1>
                }
            </div>
            <h2>Total $: {totalPrice}</h2>
            <button className={ prod.length ? '' : disabledButton } onClick={paiHandler} >Pagar</button>
        </div>
    )
}