import axios from 'axios';
import firebase from 'firebase';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

import _ from 'lodash';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {credits: [{}], debts: [{}]};

const usuarioLogado = "6abe636d-f47a-415e-9493-ac89db41361f";

export function getNumPedidos() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

export function limparDashboard() {
    return {
        type: 'LIMPA_DASHBOARD',
        payload: ''
    };
}

export const getPedidosFechados = (localId) => {
    return dispatch => {
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/`).orderByChild('status').equalTo('confirmed')
            .on("value", snapshot => {
                dispatch({ type: 'PEDIDOS_FECHADOS', payload: snapshot.val() });
            })
    };
}

export const getListRefeicoes = (localId, pedidoId) => {
    return dispatch => {
        firebase.database().ref(`/refeicoes/${usuarioLogado}/${localId}/${pedidoId}/`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_REFEICOES', payload: snapshot.val() });
            })
    }
}

export const getListAcompanhamentos = (localId, pedidoId) => {
    return dispatch => {
        firebase.database().ref(`/acompanhamentosPedido/${usuarioLogado}/${localId}/${pedidoId}/`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_ACOMPANHAMENTOS', payload: snapshot.val() });
            })
    }
}

export const getListBebidas = (localId, pedidoId) => {
    return dispatch => {
        firebase.database().ref(`/bebidaspedido/${usuarioLogado}/${localId}/${pedidoId}/`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_BEBIDAS', payload: snapshot.val() });
            })
    }
}

export const getListaDePedidos = (localId) => {
    return dispatch => {
        dispatch({ type: 'INIT_DASHBOARD', payload: '' });
        firebase.database().ref(`/pedidos/${usuarioLogado}/${localId}/`).orderByChild('status').equalTo('confirmed')
            .once("value", snapshot => {
                _.map(snapshot.val(), (val, uid) => {
                    firebase.database().ref(`/refeicoes/${usuarioLogado}/${localId}/${uid}/`)
                        .once("value", snapshot => {
                            dispatch({ type: 'LISTA_REFEICOES', payload: snapshot.val() });
                        })
                    firebase.database().ref(`/acompanhamentosPedido/${usuarioLogado}/${localId}/${uid}/`)
                        .once("value", snapshot => {
                            dispatch({ type: 'LISTA_ACOMPANHAMENTOS', payload: snapshot.val() });
                        })
                    firebase.database().ref(`/bebidaspedido/${usuarioLogado}/${localId}/${uid}/`)
                        .once("value", snapshot => {
                            dispatch({ type: 'LISTA_BEBIDAS', payload: snapshot.val() });
                        })
                });
            });
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        /*getListRefeicoes(),
        getListAcompanhamentos(),
        getListBebidas(),*/
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}