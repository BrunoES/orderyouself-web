export const modificaNumMesa = (numMesa) => {
    return dispatch => {
        dispatch({ type: 'MODIFICA_NUM_MESA', payload: numMesa });
    }
};