import style from "./agendamentoBox.module.css"

export default function AgendamentoBox({id, data, horario, tipo, servico, carro}){
    return(
        <div className={style.divAgendamento}>
            <h2>Agendamento {id}</h2>

            <div>
                <div className={style.agendamentoText}>
                    <p className={style.textBold}>Data:</p>
                    <p>{data}</p>
                </div>

                <div className={style.agendamentoText}>
                    <p className={style.textBold}>Horário:</p>
                    <p>{horario}</p>
                </div>
            </div>

            <div>
                <div className={style.agendamentoText}>
                    <p className={style.textBold}>Tipo do serviço:</p>
                    <p>{tipo}</p>
                </div>

                <div className={style.agendamentoText}>
                    <p className={style.textBold}>Serviço:</p>
                    <p>{servico}</p>
                </div>
            </div>


            <div className={style.agendamentoText}>
                <p className={style.textBold}>Carro escolhido:</p>
                <p>{carro}</p>
            </div>
        </div>
    )
}