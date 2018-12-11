const INITIAL_STATE = { descricao: '', categoriaId: '97c1a8fc-5485-44c1-86f6-44499f5b20b6', categorias: [], list: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFICA_DESCRICAO':
            return { ...state, descricao: action.payload };
        case 'MODIFICA_CATEGORIA':
            return { ...state, categoriaId: action.payload };
        case 'ADICIONA_PRATO':
            return { ...state, descricao: action.payload };
        default:
            return state;
    }
}