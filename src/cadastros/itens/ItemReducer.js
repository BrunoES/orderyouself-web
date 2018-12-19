const INITIAL_STATE = { descricao: '', erro: '', ItemIdEmAlteracao: '', labelBtnSalvar: 'Adicionar', categoriaId: '', categorias: [], list: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFICA_DESCRICAO':
            return { ...state, descricao: action.payload };
        case 'MODIFICA_CATEGORIA':
            return { ...state, categoriaId: action.payload };
        case 'LIMPA_ITEM':
            return { ...state, descricao: '', categoriaId: '', labelBtnSalvar: 'Adicionar' };
        case 'LISTA_ITENS':
            return { ...state, list: action.payload };
        case 'ADICIONA_ITEM':
            return { ...state, descricao: '', categoriaId: '' };
        case 'SUCESSO_MODIFICA_ITEM':
            return { ...state, descricao: '', categoriaId: '', ItemIdEmAlteracao: '', labelBtnSalvar: 'Adicionar' };
        case 'ERRO_MODIFICA_ITEM':
            return { ...state, erro: action.payload, descricao: '', categoriaId: '', ItemIdEmAlteracao: '', labelBtnSalvar: 'Adicionar' };
        case 'SUCESSO_DELETAR_ITEM':
            return { ...state };
        case 'ERRO_DELETAR_ITEM':
            return { ...state, erro: action.payload };
        case 'MODIFICA_ID_EM_ALTERACAO':
            return { ...state, ItemIdEmAlteracao: action.payload, labelBtnSalvar: 'Alterar' };
        default:
            return state;
    }
}