import { useState } from 'react';
import Accordion from '../UI/Accordion/Accordion';
import Title from '../UI/Title/Title';
import './FAQ.scss';

const faqs = [
    {
        question: 'Подойдет ли мне этот курс?(1)',
        answer: 'На начальных этапах от вас не требуется продвинутых знаний — достаточно школьного курса математики. Однако не пугайтесь, если вам придётся разобраться в темах, которые вы забыли или не проходили — куратор поможет освежить знания или даст полезные ссылки.',
    },
    {
        question: 'Подойдет ли мне этот курс?(2)',
        answer: 'На начальных этапах от вас не требуется продвинутых знаний — достаточно школьного курса математики. Однако не пугайтесь, если вам придётся разобраться в темах, которые вы забыли или не проходили — куратор поможет освежить знания или даст полезные ссылки.',
    },
    {
        question: 'Подойдет ли мне этот курс?(3)',
        answer: 'На начальных этапах от вас не требуется продвинутых знаний — достаточно школьного курса математики. Однако не пугайтесь, если вам придётся разобраться в темах, которые вы забыли или не проходили — куратор поможет освежить знания или даст полезные ссылки.',
    },
];

function FAQ() {
    const [active, setActive] = useState('Подойдет ли мне этот курс?(1)');

    return (
        <section className="faq">
            <div className="container faq__container">
                <Title
                    titleclasses={'title-text'}
                    titletext={'Часто задаваемые вопросы'}
                />
                <div className="faq__acrd">
                    {faqs.map((f) => {
                        return (
                            <Accordion
                                key={f.question}
                                title={f.question}
                                description={f.answer}
                                active={active}
                                setActive={setActive}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
