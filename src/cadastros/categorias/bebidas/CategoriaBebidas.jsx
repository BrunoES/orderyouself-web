import React, { Component } from 'react'

import Categoria from '../Categoria';

class CategoriaBebidas extends Component {

    render() {
        return (
            <div>
                <Categoria label={'Bebidas'} tipoCategoria={'categoriasBebidas'} />
            </div>
        );
    }
}

export default CategoriaBebidas;
