import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/DashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import AuthReducer from '../auth/AuthReducer';
import ItemReducer from '../cadastros/itens/ItemReducer';
import CategoriaReducer from '../cadastros/categorias/CategoriaReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    item: ItemReducer,
    categoria: CategoriaReducer
})

export default rootReducer;