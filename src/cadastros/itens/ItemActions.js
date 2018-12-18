import firebase from 'firebase';

export const modificaDescricao = (descricao) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_DESCRICAO', payload: descricao });
    }
};

export const modificaCategoria = (categoriaId) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_CATEGORIA', payload: categoriaId });
    }
};

export const adicionarPrato = (novoPrato, localId, categoriaId, tipoItem) => {
    return dispatch => {
        firebase.database().ref(`/${tipoItem}/${localId}/${categoriaId}/`)
            .push(novoPrato)
            .then(() => dispatch({
                type: 'ADICIONA_ITEM',
                payload: novoPrato
            }))
            .catch((erro) => dispatch({
                type: 'ADICIONA_ITEM',
                payload: ''
            }))
    };
}

export const buscarItens = (localId, categoriaId, tipoItem, queryText) => {
    return dispatch => {
        firebase.database().ref(`/${tipoItem}/${localId}/${categoriaId}/`).orderByChild('desc').startAt(queryText).endAt(queryText + "\uf8ff")
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_ITENS', payload: snapshot.val() });
            });
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