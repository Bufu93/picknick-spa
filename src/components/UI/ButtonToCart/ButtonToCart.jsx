import './ButtonToCart.scss';

function ButtonToCart({ onClick, classes, children }) {
    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}

export default ButtonToCart;
