import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard de Pedidos' icon='dashboard' />
        <MenuTree label='Cadastros' icon='edit'> 
            <MenuItem path='billingCycles' label='Categoras' icon='usd' />
            <MenuItem path='billingCycles' label='Itens' icon='usd' />
        </MenuTree>
    </ul>
)