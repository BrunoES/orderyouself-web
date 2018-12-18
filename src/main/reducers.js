import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import AppReducer from './AppReducer';
import DashboardReducer from '../dashboard/DashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import AuthReducer from '../auth/AuthReducer';
import ItemReducer from '../cadastros/itens/ItemReducer';
import CategoriaReducer from '../cadastros/categorias/CategoriaReducer';
import QRCodeMesa from '../cadastros/mesas/qrcodes/QRCodeMesaReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    dashboard: DashboardReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    item: ItemReducer,
    categoria: CategoriaReducer,
    qrCodeMesa: QRCodeMesa
})

export default rootReducer;