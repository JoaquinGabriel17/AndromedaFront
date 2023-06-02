import { useEffect, useState } from 'react'
import style from './Comentarios.module.css'
import like from '../../assets/corazon.png'
import dislike from '../../assets/me-gusta.png'


export default function Comentarios(){

    const {contain, comentario, caja, comenInput, form, input, comentarioLabel, inputBorder, comentarioContain, comentarioButton, buttonImg, liko} = style
    const [ comentary, setComentary ] = useState("")
    const [ comentarios, setComentarios ] = useState([])
    const [ ilike, setIlike ] = useState(false)
    // const comentarios = []
    // comentarios.push('ahora que pasa loco')

    function comenHandler(e){
        setComentary(e.target.value)
    }
    function comenSubmit(){
        if(comentary === "") return alert("Tu comentario no puede estar vacío")
        if(localStorage.getItem("role") === "") return alert("Debes registrarte para comentar") 
        setComentarios([...comentarios, comentary])
        setComentary("")
        // console.log(comentarios)
    }
    function handlerLike(e){
            if(e.target.src === 'http://localhost:5173'+like) e.target.src = dislike
            else e.target.src = like
    }

    return(
        <div className={contain} >
            {/* <h1>caja de comentarios</h1> */}
            {/* <input className={comenInput} value={comentary} onChange={comenHandler} type="text" placeholder="ingresa tu comentario" ></input> */}
            {/* <div> */}
            <div className={form}>
            <input className={input} value={comentary} onChange={comenHandler} placeholder="Escribe tu comentario" required={false} type="text"></input>
            <span className={inputBorder}>
            
            </span>
                
                
            </div>
            <button onClick={comenSubmit} >Comentar</button>
            <div className={caja} >
                {
                    
                    comentarios.length ? comentarios.map((comen, index) => {
                        // <p>{comen}</p>
                        // console.log(comen)
                        return(
                            <div className={comentarioContain} >
                                <label className={comentarioLabel} >{localStorage.getItem("user")}: <p className={comentario} >{comen}</p></label>
                                <button className={comentarioButton} id={index} onClick={handlerLike} > <img className={buttonImg} id={index + "img"} src={dislike} alt={like} ></img>  </button>
                                {/* <button className={liko} ></button> */}
                            </div>
                        )
                    })
                    : (
                        <p>No hay ningun comentario, se el primero en comentar!</p>
                    )
                }
            </div>
            {/* </div> */}
        </div>
    )
}