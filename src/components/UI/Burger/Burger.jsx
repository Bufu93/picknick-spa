import './Burger.scss';

function Burger({ burgerActive, setBurgerActive }) {
    return (
        <div
            onClick={() => setBurgerActive(!burgerActive)}
            className={burgerActive ? 'burger active-burger' : 'burger'}
        >
            <span></span>
        </div>
    );
}

export default Burger;
