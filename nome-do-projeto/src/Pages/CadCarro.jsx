import Header from "../Components/Header"
import Footer from "../Components/Footer";
import style from "./CadCarro.module.css"

export default function CadCarro(){
    return(
        <>
            <Header />
            <div className={style.divCadastro}>
                <h1>Cadastro de Carro</h1>

                <div className={style.divCadFlex}>
                    <div className={style.left}>
                        <div className={style.inputCarro}>
                            <p>Modelo do carro</p>
                            <input/>
                        </div>

                        <div className={style.inputCarro}>
                            <p>Marca do carro</p>
                            <input/>
                        </div>

                        <div className={style.inputCarro}>
                            <p>Cor do carro</p>
                            <input/>
                        </div>

                        <div className={style.inputCarro}>
                            <p>Ano do carro</p>
                            <input/>
                        </div>

                    </div>

                    <div className={style.right}>
                        <div className={style.inputCarro}>
                            <p>Placa do carro</p>
                            <input/>
                        </div>

                        <div className={style.inputCarro}>
                            <p>Cliente associado</p>
                            <input/>
                        </div>

                        <button className={style.buttonCadCarro}>Cadastrar</button>
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    )
}