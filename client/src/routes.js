import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//páginas
import Home from './pages/Home';
import Plantas  from './pages/Plantas';
import Cadastrar from './pages/Cadastrar';
import Empresa from './pages/Historia';
import Logar from './pages/Logar';
import Erro from './pages/Erro';

//componentes
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () => {
    return(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path = '/' component = { Home } />
            <Route exact path = '/plantas' component = { Plantas } />
            <Route exact path = '/cadastrar' component = { Cadastrar }/>
            <Route exact path = '/empresa' component = { Empresa }/>
            <Route exact path = '/logar' component = { Logar }/>
            <Route path = '*' component = { Erro }/>
        </Switch>
        <Footer/>
    </BrowserRouter>
    )
}

export default Routes;