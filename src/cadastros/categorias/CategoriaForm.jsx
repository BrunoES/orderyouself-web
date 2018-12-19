import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { adicionarCategoria, modificarCategoria, modificarDescricao, buscarCategorias, limparCategoria } from './CategoriaActions';

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

    _salvarCategoria() {
        if(this.props.descricao !== '') {
            if(this.props.categoriaIdEmAlteracao == '') {
                this.props.adicionarCategoria({ desc: this.props.descricao, id: 1 }, this.props.localId, this.props.tipoCategoria);
            } else {
                this.props.modificarCategoria({ desc: this.props.descricao, id: 1 }, this.props.categoriaIdEmAlteracao, this.props.localId, this.props.tipoCategoria);
            }
        }else{
            alert("Por favor, preencha o campo de Descrição.");
        }
    }

    _modificarDescricao(e) {
        this.props.modificarDescricao(e.target.value);
    }

    _buscarCategorias() {
        this.props.buscarCategorias(this.props.localId, this.props.tipoCategoria, this.props.descricao);
    }

    _limparCategoria() {
        this.props.limparCategoria();
        this.props.buscarCategorias(this.props.localId, this.props.tipoCategoria, '');
    }

    render() {
        return (
            <div>
                <div>
                    <input id='descricao' className='form-control'
                        placeholder='Adicione uma categoria'
                        onChange={(e) => this._modificarDescricao(e)}
                        onKeyUp={this.keyHandler}
                        value={this.props.descricao}></input>
                </div>
                <div>
                    <button onClick={() => this._salvarCategoria()}>{this.props.labelBtnSalvar}</button>
                    <button onClick={() => this._buscarCategorias()}>Buscar</button>
                    <button onClick={() => this._limparCategoria()}>Limpar</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    descricao: state.categoria.descricao,
    localId: state.app.localId,
    categoriaIdEmAlteracao: state.categoria.categoriaIdEmAlteracao,
    labelBtnSalvar: state.categoria.labelBtnSalvar
});

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarCategoria, modificarCategoria, modificarDescricao, buscarCategorias, limparCategoria }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaForm);