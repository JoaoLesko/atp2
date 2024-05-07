import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';
import NotFound from '../pages/NotFound';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login'
import Principal from "../pages/Principal";

const Rotas = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route exact={true} path ="/" element ={<Home/>}/>
                <Route exact={true} path ="/sobre" element = {<Sobre/>}/>
                <Route exact={true} path="/contato" element = {<Contato/>}/>
                <Route exact={true} path="*" element={<NotFound/>}/>
                <Route exact={true} path="/Cadastro" element={<Cadastro/>}/>
                <Route exact={true} path="/Login" element={<Login/>}/>
                <Route exact={true} path="/Principal" element={<Principal/>}/>
                {/* Se n'ao encontrar nenhum, vai para "*" que e que nao foi encontrado nada */}

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;