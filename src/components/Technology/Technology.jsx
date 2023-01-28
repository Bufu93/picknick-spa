import Title from '../UI/Title/Title';
import './Technology.scss';
import { useTranslation } from 'react-i18next';

function Technology() {
    const { t } = useTranslation();
    return (
        <section className="technology">
            <div className="container">
                <Title
                    titleclasses={'title-text'}
                    titletext={t('technologyTitle')}
                />
                <div className="technology__wrapper">
                    <div className="technology__text">
                        <p>{t('technologyText-1')}</p>
                        <p>{t('technologyText-2')}</p>
                    </div>
                    <div className="technology__img">
                        <img
                            src="images/technology.svg"
                            alt="technology"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technology;
