import Card from '../Card/Card'
import style from './Carrousel.module.css'
import data from '../../assets/cursos.json'
import { useState } from 'react'

export default function Carrousel(){

    const [ index, setIndex ] = useState(0)

    let cursos = [];
    
    console.log(cursos)

    const {  carrousel, carButton, carButtonDis } = style
    const left = '<-', rigth = '->'

    function prevHandler(){
        if(index - 1 > 0){
            setIndex(index - 5)
        }
    }
    function nextHandler(){
        if(index + 5 < data.cursos.length) setIndex(index + 5)
    }
    cursos = data.cursos.slice(index, index + 5)

    return(
        <div className={carrousel}>
            <button onClick={prevHandler} className={ index - 1 > 0 ? carButton : carButtonDis} >{left}</button>
            {
                cursos.map((curso) => {
                    return(
                        <>
                        
                        <Card key={curso.name} name={curso.name} image={curso.image} description={curso.description} autor={curso.autor} ></Card>
                        
                        </>
                    )
                })
                
            }
            <button onClick={nextHandler} className={ data.cursos.length > index + 5 ? carButton : carButtonDis } >{rigth}</button>
        </div>
    )
}