import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialog.module.css';

const Dialog = (props) => {

    
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog