import axios from 'axios';

import firebase from 'firebase';

const localId = 'NMajCK3oEvhj2XhyCzbf2bxj73H3';

export const modificaDescricao = (descricao) => {
    console.log("Modificando categoria: " + descricao);
    return dispatch => {
        dispatch({ type: 'MODIFICA_DESCRICAO', payload: descricao });
    }
};

export const adicionarCategoria = (novaCategoria, tipoCategoria) => {
    return dispatch => {
        firebase.database().ref(`/${tipoCategoria}/${localId}/`)
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

export const buscarCategorias = (tipoCategoria, queryText) => {
    return dispatch => {
        firebase.database().ref(`/${tipoCategoria}/${localId}/`).orderByChild('desc').startAt(queryText).endAt(queryText + "\uf8ff")
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_CATEGORIAS', payload: snapshot.val() });
            });
    }
};

export const limparCategoria = () => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
}

export const remove = (todo) => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};