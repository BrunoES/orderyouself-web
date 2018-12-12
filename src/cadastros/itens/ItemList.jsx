import React, { Component } from 'react'

class ItemList extends Component {

    render() {
        return (
            <div>Listagem de itens do tipo {this.props.label}</div>
        );
    }
}

export default ItemList;