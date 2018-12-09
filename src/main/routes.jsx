import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import CategoriaPratos from '../cadastros/pratos/categoria/CategoriaPratos';

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/CategoriaPratos' component={CategoriaPratos} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)