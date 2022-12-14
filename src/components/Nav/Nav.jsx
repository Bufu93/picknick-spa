import './Nav.scss';
import Logo from '../UI/Logo/Logo';
import { Link } from 'react-router-dom';
import CallButton from '../UI/CallButton/CallButton';

const links = [
    {
        link: 'О нас',
        hashtag: '/#about',
    },
    {
        link: 'Магазин',
        hashtag: '/shop',
    },
    {
        link: 'Галерея',
        hashtag: '/#galery',
    },
];

function Nav({ burgerActive }) {
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
