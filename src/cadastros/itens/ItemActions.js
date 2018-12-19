import firebase from 'firebase';

export const modificarDescricao = (descricao) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_DESCRICAO', payload: descricao });
    }
};

export const modificarCategoria = (categoriaId) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_CATEGORIA', payload: categoriaId });
    }
};

export const modificaIdEmAlteracao = (itemId) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_ID_EM_ALTERACAO', payload: itemId });
    }
};

export const limparItem = () => {
    return dispatch => {
        dispatch({ type: 'LIMPA_ITEM', payload: '' });
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

export const modificarItem = (item, tipoitem, localId, categoriaId, itemId) => {
    return dispatch => {
        firebase.database().ref(`/${tipoitem}/${localId}/${categoriaId}/${itemId}`)
            .update(item)
            .then(() => dispatch({
                type: 'SUCESSO_MODIFICA_ITEM',
                payload: item
            }))
            .catch((error) => dispatch({
                type: 'ERRO_MODIFICA_ITEM',
                payload: error.message
            }))
    };
}

export const deletarItem = (tipoItem, localId, categoriaId, itemId) => {
    return dispatch => {
        firebase.database().ref(`/${tipoItem}/${localId}/${categoriaId}`).child(itemId).remove().
            then(function() {
                dispatch({ type: 'SUCESSO_DELETAR_ITEM', payload: { } });
            })
            .catch(function(error) {
                dispatch({ type: 'ERRO_DELETAR_ITEM', payload: error.message });
            });
    };
};

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