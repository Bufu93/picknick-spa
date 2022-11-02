import { useDispatch } from 'react-redux';
import { removeFromCard } from '../../redux/cartSlice';
import CartProductCounter from '../CartProductCounter/CartProductCounter';
import './CartProduct.scss';

function CartProduct({ cartItem }) {
    const dispatch = useDispatch();
    const removeItemFromCart = (cartItem) => {
        dispatch(removeFromCard(cartItem));
    };
    return (
        <div className="cart-product">
            <div className="cart-product__left">
                <button
                    onClick={() => removeItemFromCart(cartItem)}
                    className="cart-product__btn-del"
                >
                    X
                </button>
                <div className="cart-product__title-wrp">
                    <p className="cart-product__title">{cartItem.title}</p>
                    <span className="cart-product__size">{cartItem.size}</span>
                </div>
                <div className="cart-product__price-wrp">
                    <div className="cart-product__price">
                        {cartItem.price + ' ' + cartItem.currency}
                    </div>
                    <div className="cart-product__divader">Х</div>
                    <CartProductCounter cartItem={cartItem} />
                    {cartItem.cartQuantity > 1 ? (
                        <>
                            <div className="cart-product__divader">=</div>
                            <div className="cart-product__price">
                                {cartItem.price * cartItem.cartQuantity +
                                    ' ' +
                                    cartItem.currency}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            <div className="cart-product__right">
                <div className="cart-product__img">
                    <img
                        src={cartItem.img}
                        alt={cartItem.title}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
