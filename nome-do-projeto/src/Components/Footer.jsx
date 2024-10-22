import style from "./Footer.module.css"
import logo from "../assets/logo.svg"
import facebook from "../assets/FacebookLogo.svg"
import instagram from "../assets/InstagramLogo.svg"
import clock from "../assets/Clock.svg"

import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className={style.divFooter}>
            <div className={style.leftFooter}>
                <img src={logo} />
                <p>Siga-nos nas redes sociais pra ficar por dentro das últimas novidades e promoções!</p>
                <p>19 9 9277-0546</p>

                <div className={style.redeSocial}>
                    <img src={facebook}/>
                    <p>@stilo_peliculas</p>
                </div>

                <div className={style.redeSocial}>
                    <img src={instagram}/>
                    <p>@stilo_peliculas</p>
                </div>
            </div>

            <div className={style.middleFooter}>
                <h2>Navegue pelo site</h2>
                <div className={style.middleFooterSubdiv}>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/cadastroCarro"}>Cad. Carro</Link>
                    <Link to={"/Agendamentos"}>Agendamentos</Link>
                    <Link to={"/"}>Novo Agend.</Link>
                </div>

                <button>Veja nosso outro site</button>
            </div>

            <div className={style.rightFooter}>
                <h2>Stilo Estética Automotiva</h2>

                <div className={style.rightFooterSubdiv}>
                    <img src={clock}/>
                    <p>Seg-Sex 08:30 às 18:00</p>
                </div>

                <p>Seu veículo merece o melhor cuidado. Confie na experiência da Stilo Estética Automotiva</p>

                <button>ENTRE EM CONTATO</button>
            </div>


        </div>
    )
}