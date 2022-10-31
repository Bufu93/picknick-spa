import ButtonToCart from '../UI/ButtonToCart/ButtonToCart';
import './TabsBodyCard.scss';

function TabsBodyCard({ title, img, size, price, currency }) {
    return (
        <div className="tabs-card">
            <div className="tabs-card__img">
                <img src={img} alt={title} width="100%" height="100%" />
            </div>
            <p className="tabs-card__title">{title}</p>
            <span className="tabs-card__size">{size}</span>
            <div className="tabs-card__wrp">
                <span className="tabs-card__price">
                    {price + ' ' + currency}
                </span>
                <ButtonToCart />
            </div>
        </div>
    );
}

export default TabsBodyCard;
