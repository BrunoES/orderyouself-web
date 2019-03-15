import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import Row from '../common/layout/row';

import _ from 'lodash';

import styles from './pedido.css';

function ItensList(props) {
    const itens = props.itens;
    
    const listItems = itens.map((item) =>
            <li key={item.desc}>{item.desc}</li>
        );
    return (
      <ul>{listItems}</ul>
    );
}

class Pedido extends Component {

    constructor(props) {
        super(props);
      }

    componentWillMount() {
   
    }

    handleChange(event) {
        //this.setState({value: event.target.value});
    }

    finalizarPedido () {
        alert("Finalizando Pedido");
    }

    cancelarPedido () {
        alert("Cancelando Pedido");
    }

    excluirPedido () {
        alert("Excluindo Pedido");
    }

    render() {
        return (
            <div>
                <hr></hr>
                <Row >
                    <div>
                        <div className={"float"}>
                            <input type="text" value={" Pedido Nº " + this.props.pedidoId} onChange={this.handleChange} size="28" readOnly/>
                            <input type="text" value={" Mesa " + this.props.numMesa} onChange={this.handleChange} size="28" readOnly/>
                        </div>
                        <div className={"float scrollDiv"}> 
                            <ItensList itens={this.props.itens} />    
                        </div>
                        <div className={"float"}>
                            <Button variant="success" onClick={this.finalizarPedido}>Finalizar</Button>
                            <Button variant="danger" onClick={this.excluirPedido}>Excluir</Button>
                            <Button variant="warning" onClick={this.cancelarPedido}>Cancelar</Button>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Pedido;