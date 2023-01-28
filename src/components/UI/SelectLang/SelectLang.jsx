import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SelectLang.scss';

function SelectLang() {
    const [isActive, setIsActive] = useState(false);
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setIsActive(!isActive);
            }}
            className={isActive ? 'select-lang active' : 'select-lang'}
        >
            {i18n.language.toUpperCase()}
            <div
                className={
                    isActive ? 'select-lang__menu active' : 'select-lang__menu'
                }
            >
                <button onClick={() => changeLanguage('ru')}>RU</button>
                <button onClick={() => changeLanguage('ua')}>UA</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </div>
    );
}

export default SelectLang;
