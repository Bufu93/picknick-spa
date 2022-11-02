import ProductInfo from '../ProductInfo/ProductInfo';
import ProductSlider from '../ProductSlider/ProductSlider';

import './ProductPageInfo.scss';

function ProductPageInfo() {
    return (
        <section className="product-info">
            <div className="container">
                <div className="product-info__wrapper">
                    <ProductSlider />
                    <ProductInfo />
                </div>
            </div>
        </section>
    );
}

export default ProductPageInfo;
