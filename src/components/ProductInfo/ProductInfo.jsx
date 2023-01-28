import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ButtonToCart from '../UI/ButtonToCart/ButtonToCart';
import './ProductInfo.scss';

function ProductInfo() {
    const { t } = useTranslation();
    const product = useSelector((state) => state.product.currentProduct);

    return (
        <div className="product-descr">
            <div>
                <p className="product-descr__title">{t(product.title)}</p>
                <span className="product-descr__size">{t(product.size)}</span>
                <p className="product-descr__description">
                    {t(product.description)}
                </p>
            </div>

            <div className="product-descr__price-wrp">
                <div className="product-descr__price">
                    {`${t(product.price)} ${t('currency')}`}
                </div>
                <ButtonToCart classes={'btn-to-cart'}>
                    {t('buttonToCart')}
                </ButtonToCart>
            </div>
        </div>
    );
}

export default ProductInfo;
