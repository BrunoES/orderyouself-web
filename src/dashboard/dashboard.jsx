import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getNumPedidos } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

import List from './dashboardList';

class Dashboard extends Component {

    componentWillMount() {
        //this.props.getNumPedidos()
    }

    render() {
        const { numRefeicoes, numAcompanhamentos, numBebidas } = this.props.numPedidos
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={numRefeicoes} text='Pratos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={numAcompanhamentos} text='Acompanhamentos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={numBebidas} text='Bebidas' />
                    </Row> 
                </Content> 
                <List />
            </div>
        )
    }
}

const mapStateToProps = state => ({numPedidos: state.dashboard.numPedidos})
const mapDispatchToProps = dispatch => bindActionCreators({getNumPedidos}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)