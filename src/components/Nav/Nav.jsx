import './Nav.scss';
import Logo from '../UI/Logo/Logo';
import { Link } from 'react-scroll';
import CallButton from '../UI/CallButton/CallButton';

const links = [
        {
                link: 'О нас',
        },
        {
                link: 'Магазин',
        },
        {
                link: 'Галерея',
        },
];

function Nav({ burgerActive }) {
        return (
                <ul className={burgerActive ? 'menu active' : 'menu'}>
                        <Logo
                                classes={
                                        burgerActive
                                                ? 'logo logo-mob active'
                                                : 'logo logo-mob'
                                }
                        />
                        {links.map(({ link }, index) => {
                                return (
                                        <li className="menu__item" key={index}>
                                                <Link
                                                        to="#"
                                                        className="menu__item-link"
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
