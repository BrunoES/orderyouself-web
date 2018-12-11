import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/DashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import AuthReducer from '../auth/AuthReducer';
import CategoriaPratosReducer from '../cadastros/pratos/categoria/CategoriaPratosReducer';
import  PratosReducer from '../cadastros/pratos/itens/PratosReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    categoriaPratos: CategoriaPratosReducer,
    pratos: PratosReducer
})

export default rootReducer;