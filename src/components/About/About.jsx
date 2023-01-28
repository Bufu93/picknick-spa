import Title from '../UI/Title/Title';
import { useTranslation } from 'react-i18next';
import './About.scss';

function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="about">
            <div className="container">
                <Title
                    titleclasses={'title-text'}
                    titletext={t('aboutTitle')}
                />
                <div className="about__wrapper">
                    <p>
                        <span>PickNick Organic</span> — {t('aboutTextLeft')}
                        <span>{t('aboutTextLeft-2')}</span>.
                    </p>
                    <p>{t('aboutTextRight')}</p>
                </div>
            </div>
        </section>
    );
}

export default About;
