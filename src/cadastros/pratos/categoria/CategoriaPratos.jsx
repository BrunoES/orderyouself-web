import React, { Component } from 'react'

//import PageHeader from '../template/pageHeader'
import CategoriaPratosForm from './CategoriaPratosForm'
import CategoriaPratosList from './CategoriaPratosList'

class CategoriaPratos extends Component {

    render() {
        return (
            <div>
                <CategoriaPratosForm  />
                <CategoriaPratosList  />
            </div>
        );
    }
}

export default CategoriaPratos;
