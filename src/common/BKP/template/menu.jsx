import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard de Pedidos' icon='dashboard' />
        <MenuTree label='Cadastros' icon='edit'> 
            <MenuTree label='Categoras' icon='edit'> 
                <MenuItem path='#' label='Categorias de Pratos' icon='usd' />
                <MenuItem path='#' label='Categorias de Acompanhamentos' icon='usd' />
                <MenuItem path='#' label='Categorias de Bebidas' icon='usd' />
            </MenuTree>
            <MenuTree label='Itens' icon='edit'> 
                <MenuItem path='#' label='Pratos' icon='usd' />
                <MenuItem path='#' label='Acompanhamentos' icon='usd' />
                <MenuItem path='#' label='Bebidas' icon='usd' />
            </MenuTree>
        </MenuTree>
    </ul>
)