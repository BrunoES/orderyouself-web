import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Row from  '../common/layout/row';

class ManutencaoDePedidos extends Component {

    componentWillMount() {
        
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
            </div>
        );
    }
}

export default ManutencaoDePedidos;