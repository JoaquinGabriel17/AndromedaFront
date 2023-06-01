import { useState } from 'react'
import style from './Comentarios.module.css'

export default function Comentarios(){

    const {contain, comentario, caja, comenInput, form, input, comentarioLabel, inputBorder} = style
    const [ comentary, setComentary ] = useState("")
    const [ comentarios, setComentarios ] = useState([])
    // const comentarios = []
    // comentarios.push('ahora que pasa loco')

    function comenHandler(e){
        setComentary(e.target.value)
    }
    function comenSubmit(){
        if(comentary === "") return alert("Tu comentario no puede estar vacío")
        setComentarios([ comentary, ...comentarios])
        setComentary("")
        // console.log(comentarios)
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
                    
                    comentarios.length ? comentarios.map((comen) => {
                        // <p>{comen}</p>
                        // console.log(comen)
                        return(
                            <label className={comentarioLabel} >{localStorage.getItem("user")}: <p className={comentario} >{comen}</p></label>
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