import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buscarItens } from './ItemActions'

import _ from 'lodash';

class ItemList extends Component {

    componentWillMount() {
        if(this.props.categoriaId !== '') {
            this._buscarItens(this.props.categoriaId);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.categoriaId !== this.props.categoriaId) {
            this._buscarItens(nextProps.categoriaId);
        }
    }

    _buscarItens(categoriaId) {
        this.props.buscarItens(this.props.localId, categoriaId, this.props.tipoItem, '');
    }

    renderRows(data) {
        const list = data || []
        return list.map(item => (
            <tr key={item.uid}>
                <td>{item.uid}</td>
                <td>{item.desc}</td>
                <td>{'Ativo'}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <div>Listagem de itens do tipo {this.props.label}</div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>UID</th>
                                    <th>Descrição</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows(this.props.itens)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const categoriaId = state.item.categoriaId;
    const localId = state.app.localId;
    const itens = new Array();

    _.map(state.item.list, (val, uid) => {
        itens.push(val);
        itens[itens.length - 1].uid = uid;
    });

    return { localId, categoriaId, itens };
};

const mapDispatchToProps = dispatch => bindActionCreators({ buscarItens }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);