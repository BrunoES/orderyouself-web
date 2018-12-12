import React, { Component } from 'react'

import Item from '../Item';

class Prato extends Component {

    render() {
        return (
            <div>
                <Item label={'Pratos'} tipoCategoria={'categoriasPratos'} tipoItem={'pratos'} />
            </div>
        );
    }
}

export default Prato;
