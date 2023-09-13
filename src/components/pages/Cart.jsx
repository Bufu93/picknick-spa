import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CartArrange from '../CartArrange/CartArrange';
import CartProduct from '../CartProduct/CartProduct';
import Title from '../UI/Title/Title';
import './Cart.scss';

function Cart() {
    const { t } = useTranslation();
    const cart = useSelector((state) => state.cart);

    const getTotals = () => {
        let { total, quantity } = cart.cartItems.reduce(
            (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = t(price) * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {
                total: 0,
                quantity: 0,
            }
        );
        return {
            cartTotalQuantity: quantity,
            cartTotalAmount: total,
        };
    };

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
                        <CartArrange totalprice={getTotals().cartTotalAmount} />
                    ) : null}
                </div>
            </section>
        </main>
    );
}

export default Cart;
