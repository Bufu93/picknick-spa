import Title from '../UI/Title/Title';
import { useTranslation } from 'react-i18next';
import './Ecology.scss';

function Ecology() {
    const { t } = useTranslation();
    return (
        <section className="ecology">
            <div className="container">
                <Title
                    titleclasses={'title-text'}
                    titletext={t('ecologyTitle')}
                />
                <div className="ecology__wrapper">
                    <div className="ecology__text">
                        <p>{t('ecologyText-1')}</p>
                        <p>{t('ecologyText-2')}</p>
                    </div>
                    <div className="ecology__img">
                        <img
                            src="images/ecology.svg"
                            alt="ecology"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ecology;
