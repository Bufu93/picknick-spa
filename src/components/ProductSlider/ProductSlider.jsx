import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSliderItem from '../ProductSliderItem/ProductSliderItem';
import './ProductSlider.scss';

function ProductSlider() {
    const product = useSelector((state) => state.product.currentProduct);
    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        className: 'prod',
    };
    return (
        <div className="product-slider">
            <Slider ref={(c) => (slider.current = c)} {...settings}>
                {product.slides.map(({ slide }) => {
                    return (
                        <ProductSliderItem
                            key={product.id}
                            img={slide}
                            title={product.title}
                        />
                    );
                })}
            </Slider>
            <div className="slider-btns">
                <button className="slider-btn slider-btn--prev" onClick={next}>
                    <svg
                        width="9"
                        height="17"
                        viewBox="0 0 9 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 16L8 8.5L1 1"
                            stroke="#6F8751"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    className="slider-btn slider-btn--next"
                    onClick={previous}
                >
                    <svg
                        width="9"
                        height="17"
                        viewBox="0 0 9 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 16L8 8.5L1 1"
                            stroke="#6F8751"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductSlider;
