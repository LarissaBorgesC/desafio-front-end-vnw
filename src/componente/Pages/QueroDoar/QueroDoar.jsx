import S from '../QueroDoar/QueroDoar.module.scss'
import infolivro from '../../../assets/infolivro.jpg'


export default function QueroDoar(){
    return(
        <>
        <section className={S.boxform}>
            <div className={S.boxlivro}>
                <img src={infolivro} alt='Livro' width={50} height={40} />
                <p>Informações do Livro</p>
            </div>
            <div>
            <form>
                <input type="text" id="Título" placeholder="Título" />
                <input type="text" id="Categoria" placeholder="Categoria" />
                <input type="text" id="Autor" placeholder="Autor" />
                <input type="link" id="linkdaimagem" placeholder="Link da imagem" />
            </form>
            </div>
        </section>
        </>
    )
}