import style from '../style/MainBody.module.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import imgAbout from '../../assets/FotoAboutMe.png'


export default function AboutMe() {
    return (
        <section id='overview' className={style.BodyMain}>
            
            <div className={style.MainBodyContent_right}>
                <img src={imgAbout} alt="Imagem de Perfil" />
            </div>
            <div className={style.MainBodyContent_left}>
                <h1 className={style.slideInUp}>About me</h1>
                <h3 className={style.slideInUp}>_________________</h3>
                    <p className={style.slideInUp}>quero fazer esse teste mas nada funciona</p>
                <div >
                    <AiFillGithub className={style.icons} />
                    <AiFillInstagram className={style.icons} />
                    <AiFillLinkedin className={style.icons} />
                    <AiFillFacebook className={style.icons} />

                </div>
            </div>


        </section>
    )
}

//className={style.ContainerIcons}