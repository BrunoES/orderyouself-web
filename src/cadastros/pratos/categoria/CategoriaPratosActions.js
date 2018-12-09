import axios from 'axios';

import firebase from 'firebase';

const URL = 'http://localhost:3003/api/todos';

const localId = 'NMajCK3oEvhj2XhyCzbf2bxj73H3';

export const modificaDescricao = (event) => {
    console.log("Modificando categoria: " + event.target.value);
    return dispatch => {
        dispatch({ type: 'MODIFICA_DESCRICAO', payload: event.target.value });
    }
};

export const adicionarCategoria = (novaCategoria) => {
    return dispatch => {
        firebase.database().ref(`/categoriasPratos/${localId}/`)
            .push(novaCategoria)
            .then(() => dispatch({
                type: 'ADICIONA_CATEGORIA',
                payload: novaCategoria
            }))
            .catch((erro) => dispatch({
                type: 'ADICIONA_CATEGORIA',
                payload: ''
            }))
    };
}

export const buscarCategorias = () => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};

export const limparCategoria = () => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
}

/*
export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
};

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
};
*/

export const remove = (todo) => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};