import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';

import { reduxForm, Field} from 'redux-form';

function FormSearchBar (props) {
    return (
        <div className='search-bar-grid'>
            <FontAwesomeIcon icon={faSearchMinus} className='search-bar-grid__icon' />
            <input className={`${props.className} search-bar-grid__input form-search-bar`} {...props.input} type ='text' placeholder={` ${props.placeholder}`}/>
        </div>
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props; 
        return ( 
            <div>
                      <form onSubmit={handleSubmit} className= {`${className} shop-search-bar`}>
                <Field name='query' className='shop-search-bar__form-search-bar' placeholder='Search' component={FormSearchBar} />
            </form>
            </div>
         );
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);
 
export default ShopSearchBar;