import React, { Component, Select } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { adicionarPrato, modificaDescricao, modificaCategoria, buscarPratos, limparPrato } from './PratosActions';
import { buscarCategorias } from '../categoria/CategoriaPratosActions';

import _ from 'lodash';

class PratosForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        //this.props.buscarPratos();
        this.props.buscarCategorias();
    }

    keyHandler(e) {
        /*
        const { adicionarPrato, buscarPratos, description } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? buscarPratos() : adicionarPrato(description)
        } else if (e.key === 'Escape') {
            this.props.limpar()
        }
        */
    }

    _adicionarPrato() {
        this.props.adicionarPrato({ desc: this.props.descricao, id: 1 }, this.props.categoriaId );
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
        _.map(this.props.categorias, (val, uid) => {
            arrayOptions.push(<option key={uid} value={uid} defaultValue>{val.desc}</option>);
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
    const descricao = state.pratos.descricao;
    const categoriaId = state.pratos.categoriaId;
    const categorias = state.categoriaPratos.list;

    return { descricao, categoriaId, categorias };
}

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarPrato, modificaDescricao, modificaCategoria, buscarCategorias, buscarPratos, limparPrato }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PratosForm);