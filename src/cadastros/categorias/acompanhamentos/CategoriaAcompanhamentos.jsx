import React, { Component } from 'react'

import Categoria from '../Categoria';

class CategoriaAcompanhamentos extends Component {

    render() {
        return (
            <div>
                <Categoria label={'Acompanhamentos'} tipoCategoria={'categoriasAcompanhamentos'} />
            </div>
        );
    }
}

export default CategoriaAcompanhamentos
