import '../common/template/dependencies';
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from '../dashboard/dashboard';
import Auth from '../auth/auth';
import { validaLogin } from '../auth/authActions';

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
        if (currentUser) {
            return <Dashboard />
        } else {
            return <Auth />
        }
    }
}

const mapStateToProps = state => {
    const currentUser = state.auth.currentUser;
    return { currentUser };
};
const mapDispatchToProps = dispatch => bindActionCreators({ validaLogin }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)