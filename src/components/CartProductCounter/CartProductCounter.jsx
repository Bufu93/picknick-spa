import { useDispatch } from 'react-redux';
import { decreaseCart, addToCart } from '../../redux/cartSlice';
import './CartProductCounter.scss';

function CartProductCounter({ cartItem }) {
    const dispatch = useDispatch();
    const handleDec = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };
    const handleIncr = (cartItem) => {
        dispatch(addToCart(cartItem));
    };
    return (
        <div className="counter">
            <div className="counter__btn-wrp">
                <button
                    onClick={() => handleIncr(cartItem)}
                    className="counter__btn"
                >
                    +
                </button>
                <div className="counter__result">{cartItem.cartQuantity}</div>
                <button
                    onClick={() => handleDec(cartItem)}
                    className="counter__btn"
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default CartProductCounter;
