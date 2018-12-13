import '../common/template/dependencies';
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Auth from '../auth/Auth';

import App from './app';

import CategoriaPratos from '../cadastros/categorias/pratos/CategoriaPratos';
import CategoriaAcompanhamentos from '../cadastros/categorias/acompanhamentos/CategoriaAcompanhamentos';
import CategoriaBebidas from '../cadastros/categorias/bebidas/CategoriaBebidas';

import Prato from '../cadastros/itens/pratos/Prato';
import Acompanhamento from '../cadastros/itens/acompanhamentos/Acompanhamento'
import Bebida from '../cadastros/itens/bebidas/Bebida';

import SideBar from '../common/template/sideBar';

import { validaLogin } from '../auth/AuthActions';

class AuthOrApp extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyB81m3WqaqkFQ3zUjAptFg6SGyPje98R98",
            authDomain: "orderyourself-f4a86.firebaseapp.com",
            databaseURL: "https://orderyourself-f4a86.firebaseio.com",
            projectId: "orderyourself-f4a86",
            storageBucket: "orderyourself-f4a86.appspot.com",
            messagingSenderId: "469292518877"
        };
        firebase.initializeApp(config);
        this.props.validaLogin()
    }

    render() {
        
        const { currentUser } = this.props;

        return (
            <div>
                <App>{this.props.children}</App>
            </div>
            //return <CategoriaPratos />
            //return <CategoriaAcompanhamentos />
            //return <CategoriaBebidas />

            //return <Prato />
            //return <Acompanhamento />
            //return <Bebida />

            /*
            console.log(currentUser)

            if(typeof currentUser === "undefined"){
                return <Auth />
            } else {
                return <Dashboard />
            }
            */
        );
    }
}

const mapStateToProps = state => {
    const currentUser = state.auth.currentUser;
    return { currentUser };
};
const mapDispatchToProps = dispatch => bindActionCreators({ validaLogin }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)