import './Logo.scss';

function Logo({ classes }) {
        return (
                <div className={classes}>
                        <img
                                src="images/logo.png"
                                alt="logo"
                                width="100%"
                                height="100%"
                        />
                </div>
        );
}

export default Logo;
