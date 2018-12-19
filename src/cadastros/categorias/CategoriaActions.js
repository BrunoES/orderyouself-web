import firebase from 'firebase';

export const modificarDescricao = (descricao) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_DESCRICAO', payload: descricao });
    }
};

export const modificaIdEmAlteracao = (categoriaId) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_ID_EM_ALTERACAO', payload: categoriaId });
    }
};

export const limparCategoria = () => {
    return dispatch => {
        dispatch({ type: 'LIMPA_CATEGORIA', payload: '' });
    }
};

export const adicionarCategoria = (novaCategoria, localId, tipoCategoria) => {
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

export const modificarCategoria = (categoria, categoriaId, localId, tipoCategoria) => {
    return dispatch => {
        firebase.database().ref(`/${tipoCategoria}/${localId}/${categoriaId}`)
            .update(categoria)
            .then(() => dispatch({
                type: 'SUCESSO_MODIFICA_CATEGORIA',
                payload: categoria
            }))
            .catch((error) => dispatch({
                type: 'ERRO_MODIFICA_CATEGORIA',
                payload: error.message
            }))
    };
}

export const deletarCategoria = (tipoCategoria, localId, categoriaId) => {
    return dispatch => {
        firebase.database().ref(`/${tipoCategoria}/${localId}/`).child(categoriaId).remove().
            then(function() {
                dispatch({ type: 'SUCESSO_DELETAR_CATEGORIA', payload: { } });
            })
            .catch(function(error) {
                dispatch({ type: 'ERRO_DELETAR_CATEGORIA', payload: error.message });
            });
    };
};

export const buscarCategorias = (localId, tipoCategoria, queryText) => {
    return dispatch => {
        firebase.database().ref(`/${tipoCategoria}/${localId}/`).orderByChild('desc').startAt(queryText).endAt(queryText + "\uf8ff")
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_CATEGORIAS', payload: snapshot.val() });
            });
    };
};

export const remove = (todo) => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};