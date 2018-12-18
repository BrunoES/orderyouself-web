const INITIAL_STATE = { numMesa: '' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFICA_NUM_MESA':
            return { ...state, numMesa: action.payload };
        default:
            return state;
    }
}