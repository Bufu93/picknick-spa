import './Nav.scss';
import Logo from '../UI/Logo/Logo';
import { Link } from 'react-router-dom';
import CallButton from '../UI/CallButton/CallButton';
import { useTranslation } from 'react-i18next';

function Nav({ burgerActive, onClick }) {
    const { t } = useTranslation();

    const links = [
        {
            link: t('nav-1'),
            hashtag: '/#about',
        },
        {
            link: t('nav-2'),
            hashtag: '/shop',
        },
        {
            link: t('nav-3'),
            hashtag: '/#gallery',
        },
    ];

    return (
        <ul className={burgerActive ? 'menu active' : 'menu'}>
            <Logo
                classes={
                    burgerActive ? 'logo logo-mob active' : 'logo logo-mob'
                }
            />
            {links.map(({ link, hashtag }, index) => {
                return (
                    <li className="menu__item" key={index}>
                        <Link
                            onClick={onClick}
                            to={hashtag}
                            className="menu__item-link menu__item-link--footer"
                        >
                            {link}
                        </Link>
                    </li>
                );
            })}
            <CallButton classes={'call-btn call-btn--mob'} />
        </ul>
    );
}

export default Nav;
