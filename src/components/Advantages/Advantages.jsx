import AdvantagesItem from '../AdvantagesItem/AdvantagesItem';
import Title from '../UI/Title/Title';
import './Advantages.scss';

const advantages = [
    {
        img: 'images/advantages/advantages1.svg',
        text: 'Безопасная альтернатива одноразовой пластиковой посуде',
    },
    {
        img: 'images/advantages/advantages2.svg',
        text: 'Производится из пшеничных отрубей',
    },
    {
        img: 'images/advantages/advantages3.svg',
        text: 'Экологически чистая и безопасная для человека и окружающей среды',
    },
];

const subadvantages = [
    {
        img: 'images/advantages/subadvantages1.svg',
        text: 'разогреть пищу в микроволновой печи',
    },
    {
        img: 'images/advantages/subadvantages2.svg',
        text: 'готовить в духовке, разогретой до 180 С',
    },
];

const applicationAreas = [
    {
        img: 'images/advantages/application-areas1.svg',
        text: 'Сервировка для фуршетов',
    },
    {
        img: 'images/advantages/application-areas2.svg',
        text: 'использование в домашних условиях',
    },
    {
        img: 'images/advantages/application-areas3.svg',
        text: 'поездки,походы,пикники на природе',
    },
];

function Advantages() {
    return (
        <section className="advantages">
            <div className="container advantages__container">
                <Title titleclasses={'title-text'} titletext={'Преимущества'} />
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
                            titletext={'В такой посуде можно:'}
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
                            titletext={'Области применения посуды:'}
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
