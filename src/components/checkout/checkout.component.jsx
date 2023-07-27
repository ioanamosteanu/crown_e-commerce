import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='heder-block'>
                    <span>Product</span>
                </div>
                <div className='heder-block'>
                    <span>Description</span>
                </div>
                <div className='heder-block'>
                    <span>Quantity</span>
                </div>
                <div className='heder-block'>
                    <span>Price</span>
                </div>
                <div className='heder-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
};
export default Checkout;