import background from "../assets/Background.svg"
import logo from "../assets/logo.svg"

import style from "./Login.module.css"

export default function Login(){
    return(
        <div className={style.loginContainer}>
            <img src={background} className={style.imgBackground} />
            
            <form className={style.content}>
                <img src={logo} />
                <h2>Login de Usuário</h2>

                <div className={style.contentSubdiv}>
                    <p>Email</p>
                    <input type="email" placeholder="fulano.detal@gmail.com" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Senha</p>
                    <input type="password" required/>
                </div>

                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}