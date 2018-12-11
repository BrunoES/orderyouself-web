import _ from 'lodash';

const INITIAL_STATE = { numRefeicoes: 0, numAcompanhamentos: 0, numBebidas: 0, pedidosFechados: { }, refeicoes: [{ }], acompanhamentos: [{ }], bebidas: [{ }] };

let itemTemp = new Array();

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'NUM_PEDIDOS':
            return { ...state, numPedidos: action.payload.data };
        case 'PEDIDOS_FECHADOS':
            return { ...state, pedidosFechados: action.payload };
        case 'LISTA_REFEICOES':
            itemTemp = state.refeicoes.slice();
            _.map(action.payload, (val, uid) => {
                itemTemp.push(val);
            });
            return { ...state, refeicoes: itemTemp, numRefeicoes: _.values(action.payload).length };
        case 'LISTA_ACOMPANHAMENTOS':
            itemTemp = state.acompanhamentos.slice();
            _.map(action.payload, (val, uid) => {
                itemTemp.push(val);
            });
            return { ...state, acompanhamentos: itemTemp, numAcompanhamentos: _.values(action.payload).length };
        case 'LISTA_BEBIDAS':
            itemTemp = state.bebidas.slice();
            _.map(action.payload, (val, uid) => {
                itemTemp.push(val);
            });
            return { ...state, bebidas: itemTemp, numBebidas: _.values(action.payload).length };
        default:
            return state;
    }
}