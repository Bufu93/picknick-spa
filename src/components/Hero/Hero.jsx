import './Hero.scss';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__text">
                    <h1>
                        <span>PickNick Organic</span> — {t('heroText')}
                    </h1>
                    <button>{t('heroButton')}</button>
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
