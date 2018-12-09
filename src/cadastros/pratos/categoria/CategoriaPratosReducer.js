const INITIAL_STATE = { descricao: '', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFICA_DESCRICAO':
            return { ...state, descricao: action.payload };
        case 'ADICIONA_CATEGORIA':
            return { ...state, descricao: action.payload };
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload };
        case 'TODO_CLEAR':
            return { ...state, descricao: '' };
        default:
            return state;
    }
}