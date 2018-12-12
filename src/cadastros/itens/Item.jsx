import React, { Component } from 'react'

//import PageHeader from '../template/pageHeader'
import ItemForm from './ItemForm'
import ItemList from './ItemList'

class Item extends Component {

    render() {
        return (
            <div>
                <ItemForm label={this.props.label} tipoCategoria={this.props.tipoCategoria} tipoItem={this.props.tipoItem} />
                <ItemList label={this.props.label} tipoCategoria={this.props.tipoCategoria} tipoItem={this.props.tipoItem} />
            </div>
        );
    }
}

export default Item;
