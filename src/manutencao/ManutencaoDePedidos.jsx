import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { limparPedidos } from './ManutencaoDePedidosActions';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Row from  '../common/layout/row';

import List from './ManutencaoDePedidosList';

class ManutencaoDePedidos extends Component {

    componentWillMount() {
        this.props.limparPedidos();
    }

    render() {
        return (
            <div>
                <ContentHeader title='Manutenção de Pedidos - Order YouSelf' small='Versão 1.0' />
                <Content>
                    <Row> 
                        Manutenção de Pedidos
                    </Row> 
                </Content> 
                <List />
            </div>
        );
    }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => bindActionCreators({ limparPedidos }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ManutencaoDePedidos);