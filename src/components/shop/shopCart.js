import React, { Component } from 'react';
import CartProduct from './cartProduct';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import CartButton, {CartButtonPlus} from './cartButton';

import history from '../../history';

function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => <CartProduct {...product} key={product._id}  />)
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <div className='cart-content__footer'>

            </div>
            <CartFooter className='cart-content__footer' products={products} />
        </div>
    )
}

function CartFooter ({ className, products}) {
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`}>
            <a onClick={() => history.push('/order/review')} className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {

    componentDidMount () {
        this.props.fetchCartProducts();
    }

    handleAddToCart = () => {
        if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }
    render() {
        const { className } = this.props;
        return (
            <div id='shop-cart' className={`${className} shop-cart cart-hidden`}>
                <CartButton className='shop-cart__toggle' onClick={this.handleAddToCart} />
                <CartContent className='shop-cart__content' products={this.props.cartProducts}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;