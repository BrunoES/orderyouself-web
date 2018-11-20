const INITIAL_STATE = { numPedidos: { numRefeicoes: 0, numAcompanhamentos: 0, numBebidas: 0 }, refeicoes: { }, acompanhamentos: { }, bebidas: { } };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'NUM_PEDIDOS':
            return { ...state, numPedidos: action.payload.data }
        case 'LISTA_REFEICOES':
            return { ...state, refeicoes: action.payload }
        case 'LISTA_ACOMPANHAMENTOS':
            return { ...state, acompanhamentos: action.payload }
        case 'LISTA_BEBIDAS':
            return { ...state, bebidas: action.payload }
        default:
            return state;
    }
}