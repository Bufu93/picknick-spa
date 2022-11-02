import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartImg from '../../../img/cart.svg';
import './HeaderCart.scss';

function HeaderCart() {
    const cart = useSelector((state) => state.cart);
    return (
        <Link to="/cart" className="cart-btn">
            <img src={cartImg} alt="cart" width="100%" height="100%" />
            {cart.cartItems.length ? (
                <div className="cart-btn__count">{cart.cartItems.length}</div>
            ) : null}
        </Link>
    );
}

export default HeaderCart;
