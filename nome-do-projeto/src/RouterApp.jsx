import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Agendamentos from './Pages/Agendamentos';
import CadCarro from './Pages/CadCarro';

export default function RouterApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Agendamentos" element={<Agendamentos/>}/>
                <Route path="/cadastroCarro" element={<CadCarro />}/>
            </Routes>
        </Router>
    )
}