import React, { Component, Select } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { adicionarPrato, modificaDescricao, modificaCategoria, buscarPratos, limparPrato } from './ItemActions';
import { buscarCategorias } from '../categorias/CategoriaActions';

import _ from 'lodash';

class ItemForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        //this.props.buscarPratos();
        this.props.buscarCategorias(this.props.tipoCategoria);
    }

    keyHandler(e) {
    }

    _adicionarPrato() {
        this.props.adicionarPrato({ desc: this.props.descricao, id: 1 }, this.props.categoriaId, this.props.tipoItem );
    }

    _modificaDescricao(e) {
        this.props.modificaDescricao(e.target.value);
    }

    _modificaCategoria(e) {
        this.props.modificaCategoria(e.target.value);
    }

    _buscarPratos() {
        console.log("Buscando Pratos")
    }

    _limparPrato() {
        console.log("Limpando Prato")
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

                    <select value={this.props.categoriaId} onChange={(e) => this._modificaCategoria(e)}>
                        {this._getOptionsFromCategorias()}
                    </select>
                </div>
                <div>
                    <button onClick={() => this._adicionarPrato()}>Adicionar</button>
                    <button onClick={() => this._buscarPratos()}>Buscar</button>
                    <button onClick={() => this._limparPrato()}>Limpar</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const descricao = state.item.descricao;
    const categoriaId = state.item.categoriaId;
    const categorias = state.categoria.list;

    return { descricao, categoriaId, categorias };
}

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarPrato, modificaDescricao, modificaCategoria, buscarCategorias, buscarPratos, limparPrato }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);