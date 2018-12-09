import './auth.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { autenticarUsuario, cadastraUsuario, modificaEmail, modificaSenha } from './AuthActions'
import Dashboard from '../dashboard/Dashboard';
import CategoriaPratos from '../cadastros/pratos/categoria/CategoriaPratos';

class Auth extends Component {

    componentWillMount() {
        // TO DO
    }

    _autenticarUsuario(){
        const { email, senha } = this.props;
        this.props.autenticarUsuario(email, senha);
    }

    renderBtnAcessar() {
        if(this.props.loading_login){
            return (
                <div>
                    Loading . . .
                </div>
            )
        }
        return (
           <button onClick={() => this._autenticarUsuario()}>
                Entrar
            </button>
        );
    }

    render() {
        const { erroLogin, currentUser } = this.props;
        if(!currentUser){
            return (
                <div style={{ flex: 1, padding: 10 }} >
                    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: 25, color: '#383838' }}>Order You Self</div>
                    </div>
                    <div style={{ flex: 2}}>

                        <input
                            type="text"
                            name="email"
                            value={this.props.email}
                            onChange={e => this.props.modificaEmail(e.target.value) }
                        />

                        <input
                            type="password"
                            name="senha"
                            value={this.props.senha}
                            onChange={e => this.props.modificaSenha(e.target.value) }
                        />

                        <div style={{color: '#ff0000', fontSize: 18}}>
                            {this.props.erroLogin}
                        </div>
                    </div>
                    <div style={{ flex: 2}}>
                        {this.renderBtnAcessar()}
                    </div>
                </div>
            );
        } else {
            return <Dashboard />
            //return <CategoriaPratos />
        }
    }
}

const mapStateToProps = state => {
    const { email, senha, currentUser, erroLogin, loading_login } = state.auth;

    return { email, senha, currentUser, erroLogin, loading_login };
}

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario, cadastraUsuario })(Auth);