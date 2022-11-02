import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTotals } from '../../redux/cartSlice';
import CartArrange from '../CartArrange/CartArrange';
import CartProduct from '../CartProduct/CartProduct';
import Title from '../UI/Title/Title';
import './Cart.scss';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <main>
            <section className="cart">
                <div className="container">
                    <Title titletext={'Корзина'} titleclasses={'title-text'} />
                    {cart.cartItems.length ? (
                        cart.cartItems.map((cartItem) => (
                            <CartProduct
                                key={cartItem.id}
                                cartItem={cartItem}
                            />
                        ))
                    ) : (
                        <p className="cart0">Корзина пуста</p>
                    )}
                    {cart.cartItems.length ? (
                        <CartArrange
                            totalprice={cart.cartTotalAmount}
                            currency={
                                cart.cartItems.length
                                    ? cart.cartItems[0].currency
                                    : ''
                            }
                        />
                    ) : null}
                </div>
            </section>
        </main>
    );
}

export default Cart;
