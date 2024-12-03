import Facebook from '../../assets/Facebook.png'
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
                <p>4002-8922</p>
                <nav>
                   <a href='https://www.facebook.com/'><img src={Facebook} alt="Facebook" /> </a>
                   <a href='https://x.com/?logout=1732720737380'><img src={Twitter} alt="Twitter"  /> </a>
                   <a href='https://www.youtube.com/'><img src={Youtube} alt="Youtube"  /> </a>
                   <a href='https://br.linkedin.com/'><img src={Linkedin} alt="Linkedin"  /> </a>
                   <a href='https://www.instagram.com/'><img src={Instagram} alt="Instagram" /> </a>
                </nav>
                
            </section>
            <section className={S.boxeducativo}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
            </section>
        </footer>
        </>
    )
}