import './Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__text">
                    <h1>
                        <span>PickNick Organic</span> — посуда из экологически
                        чистых материалов
                    </h1>
                    <button>В магазин</button>
                </div>
                <div className="hero__img">
                    <img
                        src="images/hero.png"
                        alt="Hero"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
