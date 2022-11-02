import FooterNav from '../FooterNav/FooterNav';
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
        <footer className="footer">
            <nav className="footer__nav">
                <div className="container footer__container">
                    <Logo classes={'logo logo-footer'} />
                    <FooterNav />
                    <CallButton classes={'call-btn call-btn--footer'} />
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
