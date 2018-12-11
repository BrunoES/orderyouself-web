import React, { Component } from 'react'

//import PageHeader from '../template/pageHeader'
import PratosForm from './PratosForm'
import PratosList from './PratosList'

class Pratos extends Component {

    render() {
        return (
            <div>
                <PratosForm  />
                <PratosList  />
            </div>
        );
    }
}

export default Pratos;
