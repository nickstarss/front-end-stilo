import background from "../assets/Background.svg"
import logo from "../assets/logo.svg"

import style from "./Login.module.css"

import { IMaskInput } from "react-imask";

export default function RegistroCliente(){
    return(
        <div className={style.loginContainer}>
            <img src={background} className={style.imgBackground} />
            
            <form className={style.content}>
                <img src={logo} />
                <h2>Registro de Cliente</h2>

                <div className={style.contentSubdiv}>
                    <p>Nome</p>
                    <input placeholder="Fulano de Tal" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Endereço</p>
                    <input placeholder="Rua dos Silva - 000" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Email</p>
                    <input type="email" placeholder="fulanotal@gmail.com" required/>
                </div>

                <div className={style.contentSubdiv}>
                    <p>Telefone</p>
                    <IMaskInput
                        required
                        mask={"(00)00000-0000"}
                        type="text"
                        placeholder="(00)00000-0000"
                    />
                </div>

                <div className={style.contentSubdiv}>
                    <p>CPF</p>
                    <IMaskInput
                        required
                        mask={"000.000.000-00"}
                        type="text"
                        placeholder="000.000.000-00"
                    />
                </div>

                <div className={style.contentSubdiv}>
                    <p>CNPJ</p>
                    <IMaskInput
                        required
                        mask={"00.000.000/0000-00"}
                        type="text"
                        placeholder="00.000.000/0000-00"
                    />
                </div>


                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}