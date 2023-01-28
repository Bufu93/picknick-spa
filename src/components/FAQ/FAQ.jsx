import { useState } from 'react';
import Accordion from '../UI/Accordion/Accordion';
import Title from '../UI/Title/Title';
import './FAQ.scss';
import { useTranslation } from 'react-i18next';

function FAQ() {
    const { t } = useTranslation();
    const faqs = [
        {
            question: t('FAQquestion-1'),
            answer: t('FAQanswer-1'),
        },
        {
            question: t('FAQquestion-2'),
            answer: t('FAQanswer-2'),
        },
        {
            question: t('FAQquestion-3'),
            answer: t('FAQanswer-3'),
        },
    ];
    const [active, setActive] = useState(faqs[0].question);

    return (
        <section className="faq">
            <div className="container faq__container">
                <Title titleclasses={'title-text'} titletext={t('FAQTitle')} />
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
