import React, { Component } from 'react'

//import PageHeader from '../template/pageHeader'
import CategoriaForm from './CategoriaForm'
import CategoriaList from './CategoriaList'

class Categoria extends Component {

    render() {
        return (
            <div>
                <CategoriaForm label={this.props.label} tipoCategoria={this.props.tipoCategoria} />
                <CategoriaList label={this.props.label} tipoCategoria={this.props.tipoCategoria} />
            </div>
        );
    }
}

export default Categoria;
