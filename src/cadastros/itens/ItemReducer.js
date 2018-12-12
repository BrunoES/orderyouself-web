const INITIAL_STATE = { descricao: '', categoriaId: '', categorias: [], list: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFICA_DESCRICAO':
            return { ...state, descricao: action.payload };
        case 'MODIFICA_CATEGORIA':
            return { ...state, categoriaId: action.payload };
        case 'ADICIONA_ITEM':
            return { ...state, descricao: action.payload };
        default:
            return state;
    }
}