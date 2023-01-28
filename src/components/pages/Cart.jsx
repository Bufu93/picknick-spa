import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getTotals } from '../../redux/cartSlice';
import CartArrange from '../CartArrange/CartArrange';
import CartProduct from '../CartProduct/CartProduct';
import Title from '../UI/Title/Title';
import './Cart.scss';

function Cart() {
    const { t } = useTranslation();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <main>
            <section className="cart">
                <div className="container">
                    <Title
                        titletext={t('cartTitle')}
                        titleclasses={'title-text'}
                    />
                    {cart.cartItems.length ? (
                        cart.cartItems.map((cartItem) => (
                            <CartProduct
                                key={cartItem.id}
                                cartItem={cartItem}
                            />
                        ))
                    ) : (
                        <p className="cart0">{t('cartTitleEmpty')}</p>
                    )}
                    {cart.cartItems.length ? (
                        <CartArrange totalprice={cart.cartTotalAmount} />
                    ) : null}
                </div>
            </section>
        </main>
    );
}

export default Cart;
