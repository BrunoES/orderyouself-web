import axios from 'axios';

import firebase from 'firebase';

const localId = 'NMajCK3oEvhj2XhyCzbf2bxj73H3';
//const categoriaId = '97c1a8fc-5485-44c1-86f6-44499f5b20b6';

export const modificaDescricao = (descricao) => {
    console.log("Modificando prato: " + descricao);
    return dispatch => {
        dispatch({ type: 'MODIFICA_DESCRICAO', payload: descricao });
    }
};

export const modificaCategoria = (categoriaId) => {
    console.log("Modificando categoria: " + categoriaId);
    return dispatch => {
        dispatch({ type: 'MODIFICA_CATEGORIA', payload: categoriaId });
    }
};

export const adicionarPrato = (novoPrato, categoriaId) => {
    return dispatch => {
        firebase.database().ref(`/pratos/${localId}/${categoriaId}/`)
            .push(novoPrato)
            .then(() => dispatch({
                type: 'ADICIONA_PRATO',
                payload: novoPrato
            }))
            .catch((erro) => dispatch({
                type: 'ADICIONA_PRATO',
                payload: ''
            }))
    };
}

export const buscarPratos = () => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};

export const limparPrato = () => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
}

export const remove = (todo) => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};