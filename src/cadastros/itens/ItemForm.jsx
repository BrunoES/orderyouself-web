import React, { Component, Select } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { adicionarPrato, modificarItem, modificarDescricao, modificarCategoria, buscarItens, limparItem } from './ItemActions';
import { buscarCategorias } from '../categorias/CategoriaActions';

import _ from 'lodash';

class ItemForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.buscarCategorias(this.props.localId, this.props.tipoCategoria, '');
    }

    keyHandler(e) {
    }

    _salvarItem() {
        if(this.props.descricao !== '' && this.props.categoriaId !== '') {
            if(this.props.ItemIdEmAlteracao == '') {
                this.props.adicionarPrato({ desc: this.props.descricao, id: 1 }, this.props.localId, this.props.categoriaId, this.props.tipoItem );
            } else {
                this.props.modificarItem({ desc: this.props.descricao, id: 1 }, this.props.tipoItem, this.props.localId, this.props.categoriaId, this.props.ItemIdEmAlteracao );
            }
        }else{
            alert("Por favor, preencha o campo de Descrição e selecione uma Categoria.");
        }
    }

    _modificaDescricao(e) {
        this.props.modificarDescricao(e.target.value);
    }

    _modificarCategoria(e) {
        this.props.modificarCategoria(e.target.value);
    }

    _buscarItens() {
        this.props.buscarItens(this.props.localId, this.props.categoriaId, this.props.tipoItem, this.props.descricao);
    }

    _limparItem() {
        this.props.limparItem();
        this.props.buscarItens(this.props.localId, '', this.props.tipoItem, '');
    }

    _getOptionsFromCategorias() {
        let arrayOptions = new Array();
        arrayOptions.push(<option key={''} value={''} defaultValue>{'Selecione uma Categoria'}</option>);
        _.map(this.props.categorias, (val, uid) => {
            arrayOptions.push(<option key={uid} value={uid}>{val.desc}</option>);
        })
        return arrayOptions;
    }

    render() {
        return (
            <div>
                <div>
                    <input id='descricao' className='form-control'
                        placeholder='Adicione um prato'
                        onChange={(e) => this._modificaDescricao(e)}
                        onKeyUp={this.keyHandler}
                        value={this.props.descricao}></input>

                    <select value={this.props.categoriaId} onChange={(e) => this._modificarCategoria(e)}>
                        {this._getOptionsFromCategorias()}
                    </select>
                </div>
                <div>
                    <button onClick={() => this._salvarItem()}>{this.props.labelBtnSalvar}</button>
                    <button onClick={() => this._buscarItens()}>Buscar</button>
                    <button onClick={() => this._limparItem()}>Limpar</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const descricao = state.item.descricao;
    const categoriaId = state.item.categoriaId;
    const categorias = state.categoria.list;
    const localId = state.app.localId;
    const ItemIdEmAlteracao = state.item.ItemIdEmAlteracao;
    const labelBtnSalvar = state.item.labelBtnSalvar;

    return { localId, ItemIdEmAlteracao, labelBtnSalvar, descricao, categoriaId, categorias };
}

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarPrato, modificarItem, modificarDescricao, modificarCategoria, buscarCategorias, buscarItens, limparItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);