import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buscarCategorias } from './CategoriaActions'

import _ from 'lodash';

class CategoriaList extends Component {

    componentWillMount() {
        this.props.buscarCategorias(this.props.localId, this.props.tipoCategoria, '');
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
                <div>Listagem da categoria de {this.props.label}</div>

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
                                {this.renderRows(this.props.categorias)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    const categorias = new Array();
    const localId = state.app.localId;

    _.map(state.categoria.list, (val, uid) => {
        categorias.push(val);
        categorias[categorias.length - 1].uid = uid;
    });

    return { localId, categorias };
};

const mapDispatchToProps = dispatch => bindActionCreators({ buscarCategorias }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoriaList);