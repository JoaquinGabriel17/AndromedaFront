import { useNavigate } from 'react-router-dom'
import data from '../../assets/cursos.json'
import Card from '../Card/Card'
import style from './AllCourses.module.css'

export default function AllCourses(){
    
    const {contain, principal, back} = style
    const navigate = useNavigate()
    const cursos = data.cursos
    console.log(cursos.length)

    return(
        <>
        
        <div className={principal} >
        <button onClick={() => navigate('/')} className={back} >BACK</button>
            <h1>Todos los cursos disponibles:</h1>
        <div className={contain} >
            {/* <h1>TODOS LOS CURSOS</h1> */}
            {
                cursos.length ? cursos.map((curso) => {
                    // console.log(curso)
                    return(
                    <Card  name={curso.name} id={curso.id} image={curso.image} description={curso.description} autor={curso.autor} > </Card>
                    )
                })
                :
                <h1>No hay cursos disponibles</h1>
            }
        </div>
        </div>
        </>
    )
}