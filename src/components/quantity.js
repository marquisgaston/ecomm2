import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Quantity extends Component {
    state = {  }
    render() {
        const { className, quantity } = this.props; 
        return ( 
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus'>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='quantity__minus'>
                    <FontAwesomeIcon icon={faMinus} />  
                </div>
            </div>
         );
    }
}
 
export default Quantity;