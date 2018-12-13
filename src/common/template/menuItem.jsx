import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div>
        <li> 
            <Link to={props.path}>
                <i></i> <span>{props.label}</span>
            </Link>
        </li>
    </div>
)