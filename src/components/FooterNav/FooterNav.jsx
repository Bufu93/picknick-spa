import './FooterNav.scss';
import { Link } from 'react-router-dom';

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

function FooterNav() {
    return (
        <ul className="footer-nav">
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
        </ul>
    );
}

export default FooterNav;
