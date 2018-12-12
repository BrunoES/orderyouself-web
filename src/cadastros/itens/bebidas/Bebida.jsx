import React, { Component } from 'react'

import Item from '../Item';

class Bebida extends Component {

    render() {
        return (
            <div>
                <Item label={'Bebidas'} tipoCategoria={'categoriasBebidas'} tipoItem={'bebidas'} />
            </div>
        );
    }
}

export default Bebida;
