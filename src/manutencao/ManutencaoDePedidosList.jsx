import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getListaDePedidosConsolidados } from '../manutencao/ManutencaoDePedidosActions';

import Pedido from './Pedido';

import _ from 'lodash';

class ManutencaoDePedidosList extends Component {

    componentWillMount() {
        this.props.getListaDePedidosConsolidados(this.props.localId);
    }

    componentDidMount() {
        // TO DO
    }
    
    renderRows(data) {
        let returnValue = [];
        if(data.length > 1) {
            for (var i = 1; i < data.length; i++) {
                returnValue.push(
                    <Pedido key={data[i].pedidoId} pedidoId={data[i].pedidoId} numMesa={data[i].numMesa} itens={data[i].itens} />
                );
            }
        }
        return returnValue;
    }

    render() {
        return (
            <div className='row'>
                {this.renderRows(this.props.pedidosConsolidados)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    let pedidosConsolidados;
    const localId = state.app.localId;
    let arrayPedidosTemp = [ { pedidoId: "", itens: [] } ];
    let arrayItensTemp = [];
    let numMesa = 0;

    let idAnterior = '';

    pedidosConsolidados = state.manutencaoDePedidos.pedidosConsolidados;

    for (var i = 1; i < pedidosConsolidados.length; i++) {

        if((idAnterior != pedidosConsolidados[i].pedidoId) && i > 1) {
            arrayPedidosTemp.push(
                {
                    pedidoId: idAnterior,
                    numMesa: numMesa,
                    itens: arrayItensTemp
                });
            arrayItensTemp = [];
        }

        for (var j = 0; j < _.values(pedidosConsolidados[i].itens).length; j++) {
            arrayItensTemp.push(_.values(pedidosConsolidados[i].itens)[j]);
        }

        idAnterior = pedidosConsolidados[i].pedidoId;
        numMesa = pedidosConsolidados[i].numMesa;
    }

    pedidosConsolidados = arrayPedidosTemp;

    return { localId, pedidosConsolidados };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getListaDePedidosConsolidados }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ManutencaoDePedidosList);