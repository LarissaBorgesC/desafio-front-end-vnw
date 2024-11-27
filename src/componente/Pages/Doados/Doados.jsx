import Livrologica from '../../../assets/Logicadapro.webp'
import Livrotecnica from '../../../assets/Tecnicasdepro.webp'
import S from '../Doados/Doados.module.scss'
export default function Doados(){
    return(
        <>
        <section className={S.boxsection} >
            <h1>Livros Doados</h1>
        </section>
        <section className={S.boxlivrologica}>
            <div className={S.boxlivro1}>
                <img src={Livrologica} alt="Livro" width={180} />
                <p>Livro Logica de Programação</p>
            </div>
            <div>
           
                <img src={Livrotecnica} alt="Livro" width={200} />
                <p>Técnicas de Programação</p>
            </div>
        </section>
        </>
    )
}