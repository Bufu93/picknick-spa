import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { addToCart } from '../../redux/cartSlice';
import { setCurrentProduct } from '../../redux/productsSlice';
import ButtonToCart from '../UI/ButtonToCart/ButtonToCart';
import './TabsBodyCard.scss';

function TabsBodyCard({ product }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickTopage = () => {
        dispatch(setCurrentProduct(product));
        navigate(`/shop/${product.id}`);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(addToCart(product));
    };

    return (
        <div onClick={handleClickTopage} className="tabs-card">
            <div className="tabs-card__img">
                <img
                    src={product.img}
                    alt={t(product.title)}
                    width="100%"
                    height="100%"
                />
            </div>
            <p className="tabs-card__title">{t(product.title)}</p>
            <span className="tabs-card__size">{t(product.size)}</span>
            <div className="tabs-card__wrp">
                <span className="tabs-card__price">
                    {t(product.price) + ' ' + t('currency')}
                </span>
                <ButtonToCart onClick={handleClick} classes={'btn-to-cart'}>
                    {t('buttonToCart')}
                </ButtonToCart>
            </div>
        </div>
    );
}

export default TabsBodyCard;
