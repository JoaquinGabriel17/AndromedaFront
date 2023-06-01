import { useNavigate, useParams } from "react-router-dom"
import data from '../../assets/cursos.json'
import style from './CursoDetail.module.css'
import Comentarios from "../ComentsBox/Comentarios"
import flecha from '../../assets/flecha-hacia-abajo-para-navegar.png'
import { useState } from "react"

export default function CursoDetail(){

    const {contain, curso, info, back, plani, planContainer, planButton, planDescription} = style
    const navigate = useNavigate()
    const [ showDescription, setShowDescription ] = useState(false)

    const cursos = data.cursos
    const planData = data.plan
    // console.log(cursos)
    const {id} = useParams()
    let currentCourse = cursos.find((curso) => curso.id === Number(id))
    // console.log(currentCourse)

    if(!currentCourse){
        return(
            <h1>Lo sentimos el curso {id} no exite o no esta disponible</h1>
        )
    }
    async function planHandler(e){
        let desc = await document.getElementById(e.target.id + "d")
        // console.log(e.target.id)
        if(desc){
        if(desc.style.display === "none") desc.style.display = 'flex'
        else desc.style.display = 'none' 
        }



    }

    return(
        <div className={contain} >
            <button className={back} onClick={() => navigate('/')} >BACK</button>
        <div className={curso} >
            <div>
                <h1>{currentCourse.name}</h1>
                <h2>{currentCourse.autor}</h2>
                <p>{currentCourse.description}</p>
            </div>
          <img src={currentCourse.image} alt={currentCourse.image} ></img>
          
        </div>
        <div className={info} >
            <h1>Información del curso</h1>
            <ul style={{listStyle: "none", textAlign: "start", fontSize: "1.5em"}} >
                <li>"" lecciones</li>
                <li>"" videos</li>
                <li>"" pruebas</li>
                <li>"" horas</li>
            </ul>
            <h2>Idiomas disponibles</h2>
            <ul style={{textAlign: "start"}} >
                <li>Español</li>
            </ul>
        </div>
        <div className={planContainer} >
            <h1>Plan de estudio</h1>
            {
                planData.map((plan) => {
                    plan.show = false
                    
                    return(
                        <div key={plan.id} >
                        <div  className={plani} >
                            <span>{plan.id}</span>
                            <h2>{plan.name}</h2>
                            <h2>{plan.duration}</h2>
                            <h2>{plan.autor}</h2>
                            <button id={plan.id} className={planButton} onClick={planHandler} des={plan.id} > <img id={plan.id} src={flecha} alt={flecha} style={{width: "20px", height: "20px"}} ></img></button>
                        </div>
                        <div className={planDescription} id={plan.id + "d"}  style={{display: "none"}} >
                            <p>{plan.description}</p>
                            <button>Comenzar</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        <Comentarios></Comentarios>
        </div>
    )
}