import './Logo.scss';
import logo from '../../../img/logo.png';

function Logo({ classes }) {
    return (
        <div className={classes}>
            <img src={logo} alt="logo" width="100%" height="100%" />
        </div>
    );
}

export default Logo;
