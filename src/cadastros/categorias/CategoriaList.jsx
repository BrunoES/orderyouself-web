import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buscarCategorias, deletarCategoria, modificaIdEmAlteracao, modificarDescricao } from './CategoriaActions'

import _ from 'lodash';

class CategoriaList extends Component {

    componentWillMount() {
        this.props.buscarCategorias(this.props.localId, this.props.tipoCategoria, '');
    }

    _modificarCategoria(categoria) {
        this.props.modificaIdEmAlteracao(categoria.uid);
        this.props.modificarDescricao(categoria.desc);
    }
    _deletarCategoria(categoriaId) {
        this.props.deletarCategoria(this.props.tipoCategoria, this.props.localId, categoriaId);
    }

    renderRows(data) {
        const list = data || []
        return list.map(categoria => (
            <tr key={categoria.uid}>
                <td>{categoria.uid}</td>
                <td>{categoria.desc}</td>
                <td>{'Ativo'}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this._modificarCategoria(categoria)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this._deletarCategoria(categoria.uid)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
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
                                    <th className='table-actions'>Ações</th>
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

const mapDispatchToProps = dispatch => bindActionCreators({ buscarCategorias, deletarCategoria, modificaIdEmAlteracao, modificarDescricao }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoriaList);