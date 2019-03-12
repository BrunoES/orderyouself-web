import axios from 'axios';
import firebase from 'firebase';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

import _ from 'lodash';

const usuarioLogado = "6abe636d-f47a-415e-9493-ac89db41361f";

export function limparPedidos() {
    return {
        type: 'LIMPA_PEDIDOS',
        payload: ''
    };
}

export const getPedidosEmAberto = (localId) => {
    return dispatch => {
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/`).orderByChild('status').equalTo('confirmed')
            .on("value", snapshot => {
                dispatch({ type: 'PEDIDOS_EM_ABERTO', payload: snapshot.val() });
            })
    };
}