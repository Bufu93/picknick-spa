import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import { setCurrentProduct } from '../../redux/productsSlice';
import ButtonToCart from '../UI/ButtonToCart/ButtonToCart';
import './TabsBodyCard.scss';

function TabsBodyCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickTopage = () => {
        dispatch(setCurrentProduct(product));
        navigate(`/shop/${product.title.toLowerCase()}`);
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
                    alt={product.title}
                    width="100%"
                    height="100%"
                />
            </div>
            <p className="tabs-card__title">{product.title}</p>
            <span className="tabs-card__size">{product.size}</span>
            <div className="tabs-card__wrp">
                <span className="tabs-card__price">
                    {product.price + ' ' + product.currency}
                </span>
                <ButtonToCart onClick={handleClick} classes={'btn-to-cart'}>
                    в корзину
                </ButtonToCart>
            </div>
        </div>
    );
}

export default TabsBodyCard;
