import React, { Component } from 'react';

import Row from  '../common/layout/row';

import _ from 'lodash';

function ItensList(props) {
    const itens = props.itens;
    
    const listItems = itens.map((item) =>
            <li key={item.desc}>{item.desc}</li>
        );
    return (
      <ul>{listItems}</ul>
    );

    /*
    const teste1 = new Array();
    teste1[0] = 1;
    teste1[1] = 2;

    const teste2 = new Array();
    teste2[0] = { campo1: "1"};
    teste2[1] = { campo2: "2"};
    teste2[2] = { campo2: "3"};
    teste2[3] = { campo2: "4"};

    console.log(itens);
    console.log(teste1);
    console.log(teste2);
    */

    /*
    let returnValue = [];
    for (var i = 1; i < itens.length; i++) {
        returnValue.push(
            <li>{itens[i]}</li>
        );
    }
    return <ul>{returnValue}</ul>
    */

    /*
    const listItems = itens.map((item) =>
            <li>{item.desc}</li>
        );
    return (
      <ul>{listItems}</ul>
    );*/

    //return <li>{"Sem Itens"}</li>;
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

    render() {
        return (
            <div>
                <Row>
                    <input type="text" value={this.props.pedidoId} onChange={this.handleChange} />
                    <ItensList itens={this.props.itens} />
                </Row>
            </div>
        );
    }
}

export default Pedido;