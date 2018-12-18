const INITIAL_STATE = { localId: 'NMajCK3oEvhj2XhyCzbf2bxj73H3' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'UID_LOCAL':
            return { ...state, localId: action.payload };
        default:
            return state;
    }
}