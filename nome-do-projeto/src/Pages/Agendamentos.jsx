import Header from "../Components/Header";
import AgendamentoBox from "../Components/agendamentoBox";
import style from "./Agendamentos.module.css"

const agendamentos = [
    {
        id: 1,
        data: "12/12/2020",
        horario: "13:00",
        tipo: "Cromamento",
        servico: "Cromamento Branco",
        carro: "EFV-9009"
    },
    {
        id: 2,
        data: "12/12/2020",
        horario: "13:00",
        tipo: "Cromamento",
        servico: "Cromamento Branco",
        carro: "EFV-9009"
    },
    {
        id: 3,
        data: "12/12/2020",
        horario: "13:00",
        tipo: "Cromamento",
        servico: "Cromamento Branco",
        carro: "EFV-9009"
    },
    {
        id: 4,
        data: "12/12/2020",
        horario: "13:00",
        tipo: "Cromamento",
        servico: "Cromamento Branco",
        carro: "EFV-9009"
    },
]

export default function Agendamentos(){
    return(
        <>
            <Header />
            < div className={style.divAgendamentos}>
                <h1>Agendamentos</h1>
                <div className={style.containerAgendamentos}>
                    {agendamentos.map(agendamento => (
                        <AgendamentoBox
                        key={agendamento.id}
                        id={agendamento.id}
                        data={agendamento.data}
                        horario={agendamento.horario}
                        tipo={agendamento.tipo}
                        servico={agendamento.servico}
                        carro={agendamento.carro}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}