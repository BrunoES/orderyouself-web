import React, { Component } from 'react'

import Categoria from '../Categoria';

class CategoriaPratos extends Component {

    render() {
        return (
            <div>
                <Categoria label={'Pratos'} tipoCategoria={'categoriasPratos'} />
            </div>
        );
    }
}

export default CategoriaPratos;
