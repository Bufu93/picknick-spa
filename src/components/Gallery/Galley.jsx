import './Gallery.scss';
import Slider from 'react-slick';
import Title from '../UI/Title/Title';
import { gallerySlides } from '../../data/data';

function Galley() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: 'gallery',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <section id="gallery">
            <div className="container gallery__wrapper">
                <Title titletext={'Галерея'} titleclasses={'title-text'} />
                <Slider {...settings}>
                    {gallerySlides.map(({ slide }) => {
                        return (
                            <div key={slide} className="gallery__item">
                                <img
                                    src={slide}
                                    alt={slide}
                                    width="100%"
                                    height="auto"
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
}

export default Galley;
