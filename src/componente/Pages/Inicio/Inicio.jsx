import S from '../Inicio/inicio.module.scss'
import Oferecelivro from '../../../assets/oferecelivro.png'
import Leitura from '../../../assets/leitura.png'
import Conhecimento from '../../../assets/conhecimento.png'
import Equilibrio from '../../../assets/equilibrio.png'
 
export default function Inicio(){
    return(
        <>
        <section className={S.boxinicio}>
            <section className={S.imgdoacao}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section  className={S.boxdoelivro}> 
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxleitura}>
                    <article >
                        <img src={Oferecelivro} alt='Oferecelivro' width={100} />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article >
                        <img src={Leitura} alt='Leitura' width={100} />
                        <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article >
                        <img src={Conhecimento} alt='Conhecimento' width={100} />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article >
                        <img src={Equilibrio} alt='Equilibrio' width={100} />
                        <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </section>
        </>
    )
}