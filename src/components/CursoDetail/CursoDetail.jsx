import { useNavigate, useParams } from "react-router-dom"
import data from '../../assets/cursos.json'
import style from './CursoDetail.module.css'
import Comentarios from "../ComentsBox/Comentarios"

export default function CursoDetail(){

    const {contain, curso} = style
    const navigate = useNavigate()

    const cursos = data.cursos
    // console.log(cursos)
    const {id} = useParams()
    let currentCourse = cursos.find((curso) => curso.id === Number(id))
    // console.log(currentCourse)

    if(!currentCourse){
        return(
            <h1>Lo sentimos el curso {id} no exite o no esta disponible</h1>
        )
    }

    return(
        <div className={contain} >
            <button onClick={() => navigate('/')} >BACK</button>
        <div className={curso} >
          <h1>{currentCourse.name}</h1>
          <h2>{currentCourse.autor}</h2>
          <img src={currentCourse.image} alt={currentCourse.image} ></img>
          <p>{currentCourse.description}</p>
        </div>
        <Comentarios></Comentarios>
        </div>
    )
}