import _ from 'lodash';

const INITIAL_STATE = { numRefeicoes: 0, numAcompanhamentos: 0, numBebidas: 0, pedidosFechados: { }, refeicoes: { }, acompanhamentos: { }, bebidas: { } };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'NUM_PEDIDOS':
            return { ...state, numPedidos: action.payload.data };
        case 'PEDIDOS_FECHADOS':
            return { ...state, pedidosFechados: action.payload };
        case 'LISTA_REFEICOES':
            console.log(action.payload);
            return { ...state, refeicoes: action.payload, numRefeicoes: _.values(action.payload).length };
        case 'LISTA_ACOMPANHAMENTOS':
            console.log(action.payload);
            return { ...state, acompanhamentos: action.payload, numAcompanhamentos: _.values(action.payload).length };
        case 'LISTA_BEBIDAS':
            console.log(action.payload);
            return { ...state, bebidas: action.payload, numBebidas: _.values(action.payload).length };
        default:
            return state;
    }
}