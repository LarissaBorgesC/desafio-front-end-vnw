import S from '../QueroDoar/QueroDoar.module.scss'
import infolivro from '../../../assets/infolivro.jpg'
import axios from 'axios'
import { useState } from 'react'


export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")


    const enviarDados = async()=>{

        const urlApi = "https://apilivros-qtdc.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar)
        alert("Livro cadastrado!")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")



    }




    const capturaTitulo  = (e) => {
        setTitulo(e.target.value)
 
    }
    const capturaCategoria  = (e) => {
        setCategoria(e.target.value)
 
    }
    const capturaAutor  = (e) => {
        setAutor(e.target.value)
 
    }
    const capturaImagem  = (e) => {
        setImagem_url(e.target.value)
 
    }






    return(
        <>
            <section className={S.boxconfprin}>
            <section className={S.boxcontainer}>

                <p> 
                    Por favor, preencha o formulário com suas informações e as informações do Livro

                </p>
            
            <form action='' className={S.boxform} onSubmit={(e)=> e.preventDefault()}>
            
            <div >
                <img src={infolivro} alt='Livro' width={50} height={40} />
                <h3>Informações do Livro</h3>
            </div>

         


                <input type="text" id="Título" placeholder="Título" onChange={capturaTitulo} value={titulo}/>
                <input type="text" id="Categoria" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
                <input type="text" id="Autor" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                <input type="link" id="linkdaimagem" placeholder="Link da imagem" onChange={capturaImagem} value={imagem_url}/>
                <input type='submit' value="Doar" onClick={enviarDados}/>
            

            </form>
            </section>
        </section>
        </>
    )
}