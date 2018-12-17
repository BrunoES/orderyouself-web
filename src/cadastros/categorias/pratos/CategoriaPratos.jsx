import React, { Component } from 'react'

import Categoria from '../Categoria';

import QRCode from 'qrcode.react';

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
