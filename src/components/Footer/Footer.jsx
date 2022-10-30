import Nav from '../Nav/Nav';
import CallButton from '../UI/CallButton/CallButton';
import Logo from '../UI/Logo/Logo';
import './Footer.scss';

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

function Footer() {
    return (
        <footer>
            <nav>
                <div className="container footer__container">
                    <Logo classes={'logo'} />
                    <Nav />
                    <CallButton classes={'call-btn'} />
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
