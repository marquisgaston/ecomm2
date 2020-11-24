import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function CartButton({className, onClick}) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={faTimes} />      
        </a>
    )
}

export function CartButtonPlus ({className, onClick}) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={faCartPlus} />      
        </a>
    )
}


