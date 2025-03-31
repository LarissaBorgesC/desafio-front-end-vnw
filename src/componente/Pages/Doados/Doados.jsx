import Livrologica from '../../../assets/Logicadapro.webp'
import Livrotecnica from '../../../assets/Tecnicasdepro.webp'
import S from '../Doados/Doados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'




export default function Doados(){
    
    const [livros, setLivros] = useState([])

    const getLivros = async () =>{
        const response = await axios.get("https://apilivros-qtdc.onrender.com/livros")

        setLivros(response.data)
    }

    useEffect( ()=> {
        getLivros()
    },[])




    return(
        <>
        <section className={S.boxsection} >
            <h2>Livros Doados</h2>
        </section>
        <section className={S.boxlivrologica}>
            <article className={S.boxlivro1}>
                <img src={Livrologica} alt="Livro"  />
                <h3>Logica de Programação</h3>
                <p>Tecnologia</p>
                <p>João Rubens Marchete Filho</p>
            </article>


            <article className={S.boxlivro2}>
           
                <img src={Livrotecnica} alt="Livro"   />
                <h3>Técnicas de Programação</h3>
                <p>Tecnologia da Informação</p>
                <p>Cassiana Fagundes da Silva</p>
            </article>

            {livros.map((item)=>(
                <article> 
                    <img src={item.imagem_url} alt='Capa do Livro' />
                    <h3>{item.titulo}</h3>
                    <p>{item.categoria}</p>
                    <p>{item.autor}</p>
                </article>

            ))}
        </section>
        </>
    )
}