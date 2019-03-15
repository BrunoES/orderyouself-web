import _ from 'lodash';

const INITIAL_STATE = { pedidosEmAberto: [{ }], pedidosConsolidados: [ [{}] ] };

let itemTemp = new Array();
let pedidoTemp = { pedidoId: "", numeMesa: 0, itens: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INIT_CONSOLIDADO':
            return { ...state, pedidosConsolidados: [ [{}] ] };
        case 'PEDIDOS_EM_ABERTO':
            return { ...state, pedidosEmAberto: action.payload };
        case 'LIMPA_PEDIDOS':
            return { ...state, pedidosEmAberto: [{ }] };
        case 'PEDIDO_CONSOLIDADO':
            itemTemp = state.pedidosConsolidados.slice();
            pedidoTemp = { pedidoId: action.payload.pedidoId, numMesa: action.payload.numMesa, itens: action.payload.itens };
            itemTemp.push(pedidoTemp);
            return { ...state, pedidosConsolidados: itemTemp };
        default:
            return state;
    }
}