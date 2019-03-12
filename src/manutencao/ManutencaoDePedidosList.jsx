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
        //return <td><Pedido item={{pedidoId: "Pequeno Teste"}} /></td>
        let returnValue = [];

        if(data.length > 1) {
            for (var i = 1; i < data.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.
                returnValue.push(
                    <tr><Pedido item={data[i]}/></tr>
                );
            }
        }
        return returnValue;
        /*
        const list = data || []
        if(list.length > 1) {
            return list.map(item => (
                <tr key={item.pedidoId}>
                    <td><Pedido item={data}/></td>
                </tr>
            ))
        }*/
    }

    render() {
        return (
            <div className='row'>
                <div className='col-xs-2'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Pedidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.props.pedidosConsolidados)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let pedidosConsolidados;
    const localId = state.app.localId;

    pedidosConsolidados = state.dashboard.pedidosConsolidados;

    return { localId, pedidosConsolidados };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getListaDePedidos, getPedidosFechados, getListRefeicoes, getListAcompanhamentos, getListBebidas, getListaDePedidosConsolidados }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ManutencaoDePedidosList);