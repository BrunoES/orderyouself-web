import React from 'react'

export default props => (
    <li className='treeview'> 
        <a href={props.path}> 
            <i></i> <span>{props.label}</span>
            <i></i>
        </a>
        <ul className='treeview-menu'> 
            {props.children}
        </ul>
    </li>
)