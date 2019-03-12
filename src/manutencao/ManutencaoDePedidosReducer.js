import _ from 'lodash';

const INITIAL_STATE = { pedidosEmAberto: [{ }] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PEDIDOS_EM_ABERTO':
            return { ...state, pedidosEmAberto: action.payload };
        case 'LIMPA_PEDIDOS':
            return { ...state, pedidosEmAberto: [{ }] };
        default:
            return state;
    }
}