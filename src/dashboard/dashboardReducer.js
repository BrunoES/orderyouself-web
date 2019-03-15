import _ from 'lodash';

    const INITIAL_STATE = { numRefeicoes: 0, numAcompanhamentos: 0, numBebidas: 0, pedidosFechados: { }, refeicoes: [{ }], acompanhamentos: [{ }], bebidas: [{ }] };

let itemTemp = new Array();
let numItens = 0;

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INIT_DASHBOARD':
            return { ...state, numRefeicoes: 0, numAcompanhamentos: 0, numBebidas: 0, pedidosFechados: { }, refeicoes: [{ }], acompanhamentos: [{ }], bebidas: [{ }], pedidosConsolidados: [{ }] };
        case 'NUM_PEDIDOS':
            return { ...state, numPedidos: action.payload.data };
        case 'PEDIDOS_FECHADOS':
            return { ...state, pedidosFechados: action.payload };
        case 'LIMPA_DASHBOARD':
            return { ...state, pedidosFechados: { }, refeicoes: [{ }], acompanhamentos: [{ }], bebidas: [{ }] };
        case 'LISTA_REFEICOES':
            numItens = state.numRefeicoes;
            itemTemp = state.refeicoes.slice();
            _.map(action.payload, (val, uid) => {
                numItens += parseInt(val.quantidade);
                itemTemp.push(val);
            });
            return { ...state, refeicoes: itemTemp, numRefeicoes: numItens };
        case 'LISTA_ACOMPANHAMENTOS':
            numItens = state.numAcompanhamentos;
            itemTemp = state.acompanhamentos.slice();
            _.map(action.payload, (val, uid) => {
                numItens += parseInt(val.quantidade);
                itemTemp.push(val);
            });
            return { ...state, acompanhamentos: itemTemp, numAcompanhamentos: numItens };
        case 'LISTA_BEBIDAS':
            numItens = state.numBebidas;
            itemTemp = state.bebidas.slice();
            _.map(action.payload, (val, uid) => {
                numItens += parseInt(val.quantidade);
                itemTemp.push(val);
            });
            return { ...state, bebidas: itemTemp, numBebidas: numItens };
        default:
            return state;
    }
}