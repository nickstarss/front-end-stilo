import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Agendamentos from './Pages/Agendamentos';
import CadCarro from './Pages/CadCarro';
import Login from './Pages/Login';
import RegistroUser from './Pages/RegistroUser';
import RegistroCliente from './Pages/RegistroCliente';

export default function RouterApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Home" element={<Home />} />
                <Route path="/Agendamentos" element={<Agendamentos/>}/>
                <Route path="/cadastroCarro" element={<CadCarro />}/>
                <Route path="/registroUser" element={<RegistroUser />}/>
                <Route path="/registroClient" element={<RegistroCliente />}/>
            </Routes>
        </Router>
    )
}