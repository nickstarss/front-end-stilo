import background from "../assets/Background.svg"
import logo from "../assets/logo.svg"

import style from "./Login.module.css"

export default function RegistroUser(){
    return(
        <div className={style.loginContainer}>
            <img src={background} className={style.imgBackground} />
            
            <form className={style.content}>
                <img src={logo} />
                <h2>Registro de Usuário</h2>

                <div className={style.contentSubdiv}>
                    <p>Email</p>
                    <input type="email" placeholder="fulano.detal@gmail.com" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Nome</p>
                    <input placeholder="Fulano de Tal" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Senha</p>
                    <input type="password" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Confirme a senha</p>
                    <input type="password" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Cliente Filiado</p>
                    <select required>
                        <option value="">Selecione uma opção</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                </div>

                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}