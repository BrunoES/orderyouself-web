import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { adicionarCategoria, modificaDescricao, buscarCategorias, limparCategoria } from './CategoriaActions';

class CategoriaForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        //this.props.buscarCategorias();
    }

    keyHandler(e) {
    }

    _adicionarCategoria() {
        this.props.adicionarCategoria({ desc: this.props.descricao, id: 1 }, this.props.tipoCategoria);
    }

    _modificaDescricao(e) {
        this.props.modificaDescricao(e.target.value);
    }

    _buscarCategorias() {
        this.props.buscarCategorias(this.props.tipoCategoria, this.props.descricao);
    }

    _limparCategoria() {
        console.log("Limpando Categoria")
    }

    render() {
        return (
            <div>
                <div>
                    <input id='descricao' className='form-control'
                        placeholder='Adicione uma categoria'
                        onChange={(e) => this._modificaDescricao(e)}
                        onKeyUp={this.keyHandler}
                        value={this.props.descricao}></input>
                </div>
                <div>
                    <button onClick={() => this._adicionarCategoria()}>Adicionar</button>
                    <button onClick={() => this._buscarCategorias()}>Buscar</button>
                    <button onClick={() => this._limparCategoria()}>Limpar</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    descricao: state.categoria.descricao
});

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarCategoria, modificaDescricao, buscarCategorias, limparCategoria }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaForm);