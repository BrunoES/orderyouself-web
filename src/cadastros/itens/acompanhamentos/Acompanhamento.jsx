import React, { Component } from 'react'

import Item from '../Item';

class Acompanhamento extends Component {

    render() {
        return (
            <div>
                <Item label={'Acompanhamentos'} tipoCategoria={'categoriasAcompanhamentos'} tipoItem={'acompanhamentos'} />
            </div>
        );
    }
}

export default Acompanhamento;
