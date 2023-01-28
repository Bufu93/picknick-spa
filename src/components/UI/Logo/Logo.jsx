import './Logo.scss';
import logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';

function Logo({ classes }) {
    return (
        <Link to="/" className={classes}>
            <img src={logo} alt="logo" width="100%" height="100%" />
        </Link>
    );
}

export default Logo;
