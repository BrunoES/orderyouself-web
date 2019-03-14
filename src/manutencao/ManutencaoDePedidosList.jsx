import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getListaDePedidos, getPedidosFechados, getListRefeicoes, getListAcompanhamentos, getListBebidas, getListaDePedidosConsolidados } from '../dashboard/DashboardActions'

import Pedido from './Pedido';

import _ from 'lodash';

class ManutencaoDePedidosList extends Component {

    componentWillMount() {
        //this.props.getListaDePedidos(this.props.localId);
        //this.props.getPedidosFechados(this.props.localId);
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
                    <Pedido key={data[i].pedidoId} pedidoId={data[i].pedidoId} itens={data[i].itens}/>
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

    let idAnterior = '';

    pedidosConsolidados = state.dashboard.pedidosConsolidados;

    for (var i = 1; i < pedidosConsolidados.length; i++) {

        if((idAnterior != pedidosConsolidados[i].pedidoId) && i > 1) {
            arrayPedidosTemp.push(
                {
                    pedidoId: idAnterior,
                    itens: arrayItensTemp
                });
            arrayItensTemp = [];
        }

        for (var j = 0; j < _.values(pedidosConsolidados[i].itens).length; j++) {
            arrayItensTemp.push(_.values(pedidosConsolidados[i].itens)[j]);
        }

        idAnterior = pedidosConsolidados[i].pedidoId;
    }

    console.log(arrayPedidosTemp);
    pedidosConsolidados = arrayPedidosTemp;

    return { localId, pedidosConsolidados };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getListaDePedidos, getPedidosFechados, getListRefeicoes, getListAcompanhamentos, getListBebidas, getListaDePedidosConsolidados }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ManutencaoDePedidosList);