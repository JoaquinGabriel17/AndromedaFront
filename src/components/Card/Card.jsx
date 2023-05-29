import { useState } from 'react'
import style from './Card.module.css'

export default function Card({ name, image, description, autor }){

    const { card, cardImage, showDescription } = style
    const [ desc, setDesc ] = useState(false)

    setTimeout(() => {
        // const cardContain = document.getElementById("cardContain")

        // console.log(cardContain)
        // if(cardContain) cardContain.addEventListener("mousedown", () => { setDesc(!desc) })
        
    }, 0);


    return(
        <div className={card} id="cardContain">
            
            <img src={image} alt={image} className={cardImage} ></img>
            <h2 style={{ margin: "5 0"}} >{name}</h2>
            <h3>{autor}</h3>
            {
                desc ?
                (
                    <p className={showDescription} >{description}</p>
                )
                :
                ("")
            }
            
        </div>
    )
}