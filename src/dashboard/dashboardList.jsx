import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPedidosFechados, getListRefeicoes, getListAcompanhamentos, getListBebidas } from './dashboardActions'

import _ from 'lodash';

class dashboardList extends Component {

    componentWillMount() {
        this.props.getPedidosFechados();
        this.props.getListRefeicoes();
        this.props.getListAcompanhamentos();
        this.props.getListBebidas();
    }

    renderRows(data) {
        const list = data || []
        return list.map(item => (
            <tr key={item.uid}>
                <td>{item.desc}</td>
                <td>{item.quantidade}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div className='row'>
                <div className='col-xs-4'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Pratos</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.props.refeicoes)}
                        </tbody>
                    </table>
                </div>

                <div className='col-xs-4'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Acompanhamentos</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.props.acompanhamentos)}
                        </tbody>
                    </table>
                </div>

                <div className='col-xs-4'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Bebidas</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.props.bebidas)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const pedidosFechados = new Array();
    const refeicoes = new Array();
    const acompanhamentos = new Array();
    const bebidas = new Array();

    _.map(state.dashboard.pedidosFechados, (val, uid) => {
        pedidosFechados.push(val);
        pedidosFechados[pedidosFechados.length - 1].uid = uid;
    });

    _.map(state.dashboard.refeicoes, (val, uid) => {
        refeicoes.push(val);
        refeicoes[refeicoes.length - 1].uid = uid;
    });

    _.map(state.dashboard.acompanhamentos, (val, uid) => {
        acompanhamentos.push(val);
        acompanhamentos[acompanhamentos.length - 1].uid = uid;
    });

    _.map(state.dashboard.bebidas, (val, uid) => {
        bebidas.push(val);
        bebidas[bebidas.length - 1].uid = uid;
    });

    console.log(pedidosFechados);
    console.log(refeicoes);
    console.log(acompanhamentos);
    console.log(bebidas);

    return { refeicoes, acompanhamentos, bebidas };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getPedidosFechados, getListRefeicoes, getListAcompanhamentos, getListBebidas }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(dashboardList)