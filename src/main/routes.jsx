import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/Dashboard';

import ManutencaoDePedidos from '../manutencao/ManutencaoDePedidos';

import CategoriaPratos from '../cadastros/categorias/pratos/CategoriaPratos';
import CategoriaAcompanhamentos from '../cadastros/categorias/acompanhamentos/CategoriaAcompanhamentos';
import CategoriaBebidas from '../cadastros/categorias/bebidas/CategoriaBebidas';

import Prato from '../cadastros/itens/pratos/Prato';
import Acompanhamento from '../cadastros/itens/acompanhamentos/Acompanhamento';
import Bebida from '../cadastros/itens/bebidas/Bebida';
import QRCodeMesa from '../cadastros/mesas/qrcodes/QRCodeMesa';

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/manutencaoDePedidos' component={ManutencaoDePedidos} />
            <Route path='/categoriaPratos' component={CategoriaPratos} />
            <Route path='/categoriaAcompanhamentos' component={CategoriaAcompanhamentos} />
            <Route path='/categoriaBebidas' component={CategoriaBebidas} />
            <Route path='/prato' component={Prato} />
            <Route path='/acompanhamento' component={Acompanhamento} />
            <Route path='/bebida' component={Bebida} />
            <Route path='/mesaqrcode' component={QRCodeMesa} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)