import style from "./Header.module.css"
import logo from "../assets/logo.svg"

import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className={style.header}>
            <img src={logo}/>
            <div className={style.textHeader}>
                  <Link to="/">Home</Link>
                  <Link to="/cadastroCarro">Cad. Carro</Link>
                  <Link to="/Agendamentos">Agendamentos</Link>
                  <Link to="/">Novo Agend.</Link>
            </div>
        </div>
    )
}