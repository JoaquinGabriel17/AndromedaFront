import { useState } from 'react'
import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'

export default function Card({ name, image, description, autor, id }){

    const navigate = useNavigate()
    const { card, cardImage, showDescription } = style
    const [ desc, setDesc ] = useState(false)
    // console.log('me invocaron')



    return(
        <div className={card} onClick={() => {
            // console.log(typeof localStorage.getItem("token"))
            if(localStorage.getItem("token") === "true") return navigate(`/cursos/${id}`)
            else return navigate('/login')
            }} id="cardContain">
            
            <img src={image} alt={image} className={cardImage} ></img>
            <h2 style={{ margin: "0"}} >{name}</h2>
            <h3>{autor}</h3>
            <p className={showDescription} >{description}</p>
             
            
        </div>
    )
}