import { useNavigate } from "react-router-dom"
import style from './Carrito.module.css'
import data from '../../assets/cursos.json'
import { deleteProd } from '../../redux/actions'
import { useEffect, useState } from "react"

export default function Carrito(){

    const { contain, product, productos, back } = style
    const { cursos } = data
    const [ prod, setProd ] = useState([])
    const select = []
    let totalPrice = 0
    let b = 0

    
     let carrito = localStorage.getItem("carrito")
     if(carrito) carrito = JSON.parse(carrito)

    carrito.forEach((id) => {
        const curso = cursos.find((curs) => Number(curs.id) === Number(id))
        select.push(curso)
    })
    useEffect(() => {
        setProd([...select])
    },[])
    const navigate = useNavigate()

    function deleteHandler(e){
        prod.splice(e.target.id, 1)
        setProd([...prod])
        localStorage.setItem("carrito", JSON.stringify(prod))
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
        </div>
    )
}