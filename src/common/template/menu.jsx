import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard de Pedidos' icon='dashboard' />
        <MenuTree label='Cadastros' icon='edit'> 
            <MenuTree label='Categoras' icon='edit'> 
                <MenuItem path='/categoriaPratos' label='Categorias de Pratos' icon='usd' />
                <MenuItem path='/categoriaAcompanhamentos' label='Categorias de Acompanhamentos' icon='usd' />
                <MenuItem path='/categoriaBebidas' label='Categorias de Bebidas' icon='usd' />
            </MenuTree>
            <MenuTree label='Itens' icon='edit'> 
                <MenuItem path='/prato' label='Pratos' icon='usd' />
                <MenuItem path='/acompanhamento' label='Acompanhamentos' icon='usd' />
                <MenuItem path='/bebida' label='Bebidas' icon='usd' />
            </MenuTree>
            <MenuTree label='Mesas' icon='edit'> 
                <MenuItem path='/mesaqrcode' label='QRCodes das Mesas' icon='usd' />
            </MenuTree>
        </MenuTree>
    </ul>
);