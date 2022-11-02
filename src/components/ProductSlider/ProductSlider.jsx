import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSliderItem from '../ProductSliderItem/ProductSliderItem';
import './ProductSlider.scss';

function ProductSlider() {
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
    };
    return (
        <div className="product-slider">
            <Slider ref={(c) => (slider.current = c)} {...settings}>
                <ProductSliderItem />
                <ProductSliderItem />
                <ProductSliderItem />
                <ProductSliderItem />
                <ProductSliderItem />
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductSlider;
