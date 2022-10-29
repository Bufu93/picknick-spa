import './HeaderCart.scss';

function HeaderCart() {
        return (
                <button className="cart-btn">
                        <img
                                src="images/cart.svg"
                                alt="cart"
                                width="100%"
                                height="100%"
                        />
                        <div className="cart-btn__count">2</div>
                </button>
        );
}

export default HeaderCart;
