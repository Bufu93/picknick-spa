import ButtonToCart from '../UI/ButtonToCart/ButtonToCart';
import './ProductInfo.scss';

function ProductInfo() {
    return (
        <div className="product-descr">
            <div>
                <p className="product-descr__title">Блюдо круглое</p>
                <span className="product-descr__size">⌀ 20 см</span>
                <p className="product-descr__description">
                    Блюдо круглое — прочное и удобное в использовании. Подходит
                    для приготовления холодных и горячих блюд, для разогрева в
                    микроволновой печи, для приготовления в духовке, разогретой
                    до 180° С, для подачи горячей еды: крем-супов, вторых блюд.{' '}
                    <br />
                    <br />
                    Вы можете удобно и безопасно использовать блюдо дома, на
                    пикнике, в баре или даже в ресторане. Поскольку наша посуда
                    изготовлена из чистых отрубей пшеницы, вы можете спокойно
                    съесть её, если хотите.
                </p>
            </div>

            <div className="product-descr__price-wrp">
                <div className="product-descr__price">16.50 ₴</div>
                <ButtonToCart classes={'btn-to-cart'}>В корзину</ButtonToCart>
            </div>
        </div>
    );
}

export default ProductInfo;
