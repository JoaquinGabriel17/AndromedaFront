import { useState } from 'react'
import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add, deleteProd } from '../../redux/actions'


export default function Card({ name, image, description, autor, id }){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { card, cardImage, showDescription, cardButton } = style
    const [ est, setEst ] = useState(true)
    // console.log('me invocaron')
    // let carrito = localStorage.getItem("")
    function change(){
        let carro = JSON.parse(localStorage.getItem("carrito"))
        // console.log(carro, carro.includes(id))
        if(carro.includes(id)){
            deleteProd(id)
            setEst(true)
        }
        else {
            add(id)
            setEst(false)
        }
        // console.log(est)
    }



    return(
        <div className={card}  id="cardContain">
            
            <img src={image} alt={image} className={cardImage} ></img>
            <h2 style={{ margin: "0"}} >{name}</h2>
            <h3>{autor}</h3>
            <div className={cardButton} >
            { est ? <button onClick={change} >comprar</button> : <button onClick={change} >eliminar</button>}
            <button onClick={() => {
            if(localStorage.getItem("token") === "true") return navigate(`/cursos/${id}`)
            else return navigate('/login')
            }} >info</button>
            </div>
            
            <p className={showDescription} >{description}</p>
             
            
        </div>
    )
}