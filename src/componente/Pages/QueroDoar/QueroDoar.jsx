import S from '../QueroDoar/QueroDoar.module.scss'
import infolivro from '../../../assets/infolivro.jpg'


export default function QueroDoar(){
    return(
        <>
            <section className={S.boxconfprin}>
            <section className={S.boxcontainer}>

                <p> 
                    Por favor, preencha o formulário com suas informações e as informações do Livro

                </p>
            
            <form action='' className={S.boxform}>
            
            <div >
                <img src={infolivro} alt='Livro' width={50} height={40} />
                <h3>Informações do Livro</h3>
            </div>

         


                <input type="text" id="Título" placeholder="Título" />
                <input type="text" id="Categoria" placeholder="Categoria" />
                <input type="text" id="Autor" placeholder="Autor" />
                <input type="link" id="linkdaimagem" placeholder="Link da imagem" />
                <input type='submit' value="Doar"/>
            

            </form>
            </section>
        </section>
        </>
    )
}