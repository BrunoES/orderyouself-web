import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { limparDashboard, getNumPedidos } from './DashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from  '../common/widget/valueBox';
import Row from  '../common/layout/row';

import List from './DashboardList';

class Dashboard extends Component {

    componentWillMount() {
        this.props.limparDashboard()
    }

    render() {
        const { numRefeicoes, numAcompanhamentos, numBebidas } = this.props;
        return (
            <div>
                <ContentHeader title='Dashboard de Pedidos - Order YouSelf' small='Versão 1.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='utensils'
                            value={numRefeicoes} text='Pratos' />
                        <ValueBox cols='12 4' color='red' icon='utensils'
                            value={numAcompanhamentos} text='Acompanhamentos' />
                        <ValueBox cols='12 4' color='blue' icon='wine-glass-alt'
                            value={numBebidas} text='Bebidas' />
                    </Row> 
                </Content> 
                <List />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { numRefeicoes, numAcompanhamentos, numBebidas } = state.dashboard;
    return { numRefeicoes, numAcompanhamentos, numBebidas };
};

const mapDispatchToProps = dispatch => bindActionCreators({ limparDashboard, getNumPedidos }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);