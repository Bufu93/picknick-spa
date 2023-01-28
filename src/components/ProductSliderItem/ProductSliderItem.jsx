import './ProductSliderItem.scss';

function ProductSliderItem({ img, title }) {
    return (
        <div className="slider-item">
            <div className="slider-item__img">
                <img src={img} alt={title} width="100%" height="100%" />
            </div>
        </div>
    );
}

export default ProductSliderItem;
