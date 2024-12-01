import Facebook from '../../assets/f.png'
import Twitter from '../../assets/X.png'
import Youtube from '../../assets/y.png'
import Linkedin from '../../assets/Lin.png'
import Instagram from '../../assets/I.png'
import S from '../Footer/footer.module.scss'


export default function footer(){
    return(
        <>
        <footer>
            <section className={S.boxmidias}>
                <h3>4002-8922</h3>
                <nav>
                   <a href='https://www.facebook.com/'><img src={Facebook} alt="Facebook" width={40}/> </a>
                   <a href='https://x.com/?logout=1732720737380'><img src={Twitter} alt="Twitter" width={40} /> </a>
                   <a href='https://www.youtube.com/'><img src={Youtube} alt="Youtube" width={40} /> </a>
                   <a href='https://br.linkedin.com/'><img src={Linkedin} alt="Linkedin" width={40} /> </a>
                   <a href='https://www.instagram.com/'><img src={Instagram} alt="Instagram" width={40} /> </a>
                </nav>
                
            </section>
            <section className={S.boxeducativo}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
            </section>
        </footer>
        </>
    )
}