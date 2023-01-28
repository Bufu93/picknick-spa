import { useTranslation } from 'react-i18next';
import './CartArrange.scss';

function CartArrange({ totalprice }) {
    const { t } = useTranslation();
    return (
        <div className="cart-arrange">
            <div className="container">
                <div className="cart-arrange__wrapper">
                    <div className="cart-arrange__totalprice totalprice">
                        <div className="totalprice__text">Общая сумма:</div>
                        <div className="totalprice__num">
                            {`${totalprice} ${t('currency')}`}
                        </div>
                    </div>
                    <button className="cart-arrange__btn">
                        оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartArrange;
