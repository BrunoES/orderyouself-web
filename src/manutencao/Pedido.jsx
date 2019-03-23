import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deletaPedido, cancelaPedido, finalizaPedido } from '../manutencao/ManutencaoDePedidosActions';

import Content from '../common/template/content';

import Row from '../common/layout/row';

import _ from 'lodash';

function ItensList(props) {
    const itens = props.itens;
    let count = 0;

    const listItems = itens.map((item) => {
        count++;    
        return (
                <li key={count}>{`${item.quantidade}${" "}${item.desc}`}</li>
            );
        }
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

    _finalizaPedido () {
        this.props.finalizaPedido(this.props.pedidoId, this.props.localId);
    }

    _cancelaPedido () {
        this.props.cancelaPedido(this.props.pedidoId, this.props.localId);
    }

    _deletaPedido () {
        this.props.deletaPedido(this.props.pedidoId, this.props.localId);
    }

    render() {
        return (
            <div>
                <hr></hr>
                <Row >
                    <div>
                        <Content>
                            <div className={"float"}>
                                <input type="text" value={" Pedido Nº " + this.props.pedidoId} onChange={this.handleChange} size="28" readOnly/>
                                <input type="text" value={" Mesa " + this.props.numMesa} onChange={this.handleChange} size="28" readOnly/>
                            </div>
                            <div className={"float scrollDiv"}> 
                                <ItensList itens={this.props.itens} />    
                            </div>
                            <div className={"float"}>
                                <Button variant="success" onClick={() => this._finalizaPedido()}>Finalizar</Button>
                                <Button variant="danger" onClick={() => this._deletaPedido()}>Excluir</Button>
                                <Button variant="warning" onClick={() => this._cancelaPedido()}>Cancelar</Button>
                            </div>
                        </Content>
                    </div>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const localId = state.app.localId;

    return { localId };
};

const mapDispatchToProps = dispatch => bindActionCreators({ deletaPedido, cancelaPedido, finalizaPedido }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Pedido);