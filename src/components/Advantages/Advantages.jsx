import AdvantagesItem from '../AdvantagesItem/AdvantagesItem';
import Title from '../UI/Title/Title';
import './Advantages.scss';
import { useTranslation } from 'react-i18next';

function Advantages() {
    const { t } = useTranslation();
    const advantages = [
        {
            img: 'images/advantages/advantages1.svg',
            text: t('advantage-1'),
        },
        {
            img: 'images/advantages/advantages2.svg',
            text: t('advantage-2'),
        },
        {
            img: 'images/advantages/advantages3.svg',
            text: t('advantage-3'),
        },
    ];

    const subadvantages = [
        {
            img: 'images/advantages/subadvantages1.svg',
            text: t('subAdvantage-1'),
        },
        {
            img: 'images/advantages/subadvantages2.svg',
            text: t('subAdvantage-2'),
        },
    ];

    const applicationAreas = [
        {
            img: 'images/advantages/application-areas1.svg',
            text: t('applicationArea-1'),
        },
        {
            img: 'images/advantages/application-areas2.svg',
            text: t('applicationArea-2'),
        },
        {
            img: 'images/advantages/application-areas3.svg',
            text: t('applicationArea-3'),
        },
    ];

    return (
        <section className="advantages">
            <div className="container advantages__container">
                <Title
                    titleclasses={'title-text'}
                    titletext={t('advantagesTitle')}
                />
                <div className="advantages__wrapper">
                    {advantages.map((adv, index) => {
                        return (
                            <AdvantagesItem
                                key={index}
                                classes={'advantages__item'}
                                img={adv.img}
                                text={adv.text}
                            />
                        );
                    })}
                </div>
                <div className="advantages__items-wrapper">
                    <div className="advantages__inner">
                        <Title
                            titleclasses={'title-text small'}
                            titletext={t('subAdvantageTitle')}
                        />
                        <div className="advantages__item-wrapper advantages__item-wrapper--first">
                            {subadvantages.map((adv, index) => {
                                return (
                                    <AdvantagesItem
                                        key={index}
                                        classes={'advantages__item small'}
                                        img={adv.img}
                                        text={adv.text}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="advantages__inner">
                        <Title
                            titleclasses={'title-text small'}
                            titletext={t('applicationAreaTitle')}
                        />
                        <div className="advantages__item-wrapper">
                            {applicationAreas.map((adv, index) => {
                                return (
                                    <AdvantagesItem
                                        key={index}
                                        classes={'advantages__item small'}
                                        img={adv.img}
                                        text={adv.text}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
