import React, { Component } from 'react';

/*
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { adicionarCategoria, modificaDescricao, buscarCategorias, limpar } from './CategoriaPratosActions';

class CategoriaPratosForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.buscarCategorias();
    }

    keyHandler(e) {
        const { adicionarCategoria, buscarCategorias, description } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? buscarCategorias() : adicionarCategoria(description)
        } else if (e.key === 'Escape') {
            this.props.limpar()
        }
    }

    render() {
        const { adicionarCategoria, buscarCategorias, description } = this.props;
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.modificaDescricao}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => adicionarCategoria(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={buscarCategorias}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.limpar}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
});

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarCategoria, modificaDescricao, buscarCategorias, limpar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaPratosForm);
*/

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { adicionarCategoria, modificaDescricao, buscarCategorias, limparCategoria } from './CategoriaPratosActions';

class CategoriaPratosForm extends Component {

    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        //this.props.buscarCategorias();
    }

    keyHandler(e) {
        /*
        const { adicionarCategoria, buscarCategorias, description } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? buscarCategorias() : adicionarCategoria(description)
        } else if (e.key === 'Escape') {
            this.props.limpar()
        }
        */
    }

    _adicionarCategoria() {
        this.props.adicionarCategoria({ desc: this.props.descricao, id: 1 });
    }

    _modificaDescricao(e) {
        this.props.modificaDescricao(e);
    }

    _buscarCategorias() {
        console.log("Buscando Categoria")
    }

    _limparCategoria() {
        console.log("Limpando Categoria")
    }

    render() {
        return (
            <div>
                <div>
                    <input id='descricao' className='form-control'
                        placeholder='Adicione uma tarefa'
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
    descricao: state.categoriaPratos.descricao
});

const mapDispatchToProps = dispatch => bindActionCreators({ adicionarCategoria, modificaDescricao, buscarCategorias, limparCategoria }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaPratosForm);