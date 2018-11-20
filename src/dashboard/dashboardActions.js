import axios from 'axios';
import firebase from 'firebase';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {credits: [{}], debts: [{}]};

const usuarioLogado = "6abe636d-f47a-415e-9493-ac89db41361f";
const pedidoAtual = "b68cf9a9-c745-4752-95c2-8638732a94ce";

export function getNumPedidos() {
    /*const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }*/
}

/*
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
*/

export const getListRefeicoes = () => {
    return dispatch => {
        firebase.database().ref(`/refeicoes/${usuarioLogado}/${pedidoAtual}/`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_REFEICOES', payload: snapshot.val() });
            })
    }
}

export const getListAcompanhamentos = () => {
    return dispatch => {
        firebase.database().ref(`/acompanhamentosPedido/${usuarioLogado}/${pedidoAtual}/`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_ACOMPANHAMENTOS', payload: snapshot.val() });
            })
    }
}

export const getListBebidas = () => {
    return dispatch => {
        firebase.database().ref(`/bebidaspedido/${usuarioLogado}/${pedidoAtual}/`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_BEBIDAS', payload: snapshot.val() });
            })
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