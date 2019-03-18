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

export const deletaPedido = (pedidoId, localId) => {
    return dispatch => {
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/${pedidoId}/`)
            .remove()
            .then(() => dispatch({
                type: 'DELETA_PEDIDO',
                payload: ''
            }))
            .catch((erro) => dispatch({
                type: 'DELETA_PEDIDO',
                payload: ''
            }))
    };
}

export const cancelaPedido = (pedidoId, localId) => {
    return dispatch => {
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/${pedidoId}/`)
            .update({ 'status': 'canceled_by_admin' })
            .then(() => dispatch({
                type: 'CANCELA_PEDIDO',
                payload: ''
            }))
            .catch((erro) => dispatch({
                type: 'CANCELA_PEDIDO',
                payload: ''
            }))
    };
}

export const finalizaPedido = (pedidoId, localId) => {
    return dispatch => {
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/${pedidoId}/`)
            .update({ 'status': 'done' })
            .then(() => dispatch({
                type: 'CONFIRMA_PEDIDO',
                payload: ''
            }))
            .catch((erro) => dispatch({
                type: 'CONFIRMA_PEDIDO',
                payload: ''
            }))
    };
}


export const getListaDePedidosConsolidados = (localId) => {
    return dispatch => {
        dispatch({ type: 'INIT_CONSOLIDADO', payload: '' });
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/`).orderByChild('status').equalTo('confirmed')
            .once("value", snapshot => {
                _.map(snapshot.val(), (val, uid) => {
                    
                    let tempPayload = { pedidoId: "", numMesa: 0, itens: {} };

                    firebase.database().ref(`/refeicoes/${usuarioLogado}/${localId}/${uid}/`)
                        .once("value", snapshot => {
                            tempPayload.pedidoId = uid;
                            tempPayload.numMesa = val.mesa;
                            tempPayload.itens = snapshot.val();
                            dispatch({ type: 'PEDIDO_CONSOLIDADO', payload: tempPayload });
                        })
                    firebase.database().ref(`/acompanhamentosPedido/${usuarioLogado}/${localId}/${uid}/`)
                        .once("value", snapshot => {
                            tempPayload.pedidoId = uid;
                            tempPayload.numMesa = val.mesa;
                            tempPayload.itens = snapshot.val();
                            dispatch({ type: 'PEDIDO_CONSOLIDADO', payload: tempPayload });
                        })
                    firebase.database().ref(`/bebidaspedido/${usuarioLogado}/${localId}/${uid}/`)
                        .once("value", snapshot => {
                            tempPayload.pedidoId = uid;
                            tempPayload.numMesa = val.mesa;
                            tempPayload.itens = snapshot.val();
                            dispatch({ type: 'PEDIDO_CONSOLIDADO', payload: tempPayload });
                        })
                });
            });
    }
}