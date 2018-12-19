const INITIAL_STATE = { descricao: '', erro: '', categoriaIdEmAlteracao: '', labelBtnSalvar: 'Adicionar', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFICA_DESCRICAO':
            return { ...state, descricao: action.payload };
        case 'LIMPA_CATEGORIA':
            return { ...state, descricao: action.payload, labelBtnSalvar: 'Adicionar' };
        case 'ADICIONA_CATEGORIA':
            return { ...state, descricao: '' };
        case 'LISTA_CATEGORIAS':
            return { ...state, list: action.payload };
        case 'SUCESSO_MODIFICA_CATEGORIA':
            return { ...state, descricao: '', categoriaIdEmAlteracao: '', labelBtnSalvar: 'Adicionar' };
        case 'ERRO_MODIFICA_CATEGORIA':
            return { ...state, erro: action.payload, descricao: '', categoriaIdEmAlteracao: '', labelBtnSalvar: 'Adicionar' };
        case 'SUCESSO_DELETAR_CATEGORIA':
            return { ...state };
        case 'ERRO_DELETAR_CATEGORIA':
            return { ...state, erro: action.payload };
        case 'MODIFICA_ID_EM_ALTERACAO':
            return { ...state, categoriaIdEmAlteracao: action.payload, labelBtnSalvar: 'Alterar' };
        case 'TODO_CLEAR':
            return { ...state, descricao: '' };
        default:
            return state;
    }
}