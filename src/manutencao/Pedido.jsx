import React, { Component } from 'react';

import Row from  '../common/layout/row';

class Pedido extends Component {

    constructor(props) {
        super(props);
      }

    componentWillMount() {
        // console.log(this.props.item.pedidoId);
    }

    render() {
        return (
            <div>
                <Row>
                    <input type="text" value={this.props.item.pedidoId} />
                </Row>
            </div>
        );
    }
}

export default Pedido;