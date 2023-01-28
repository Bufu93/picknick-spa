import { useState } from 'react';
import Nav from '../Nav/Nav';
import Burger from '../UI/Burger/Burger';
import CallButton from '../UI/CallButton/CallButton';
import HeaderCart from '../UI/HeaderCart/HeaderCart';
import Logo from '../UI/Logo/Logo';
import SelectLang from '../UI/SelectLang/SelectLang';
import './Header.scss';

function Header() {
    const [burgerActive, setBurgerActive] = useState(false);

    const closeNav = () => {
        setBurgerActive(false);
    };

    return (
        <header className="header">
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="header__left">
                            <Logo classes={'logo'} />
                            <Nav
                                burgerActive={burgerActive}
                                onClick={closeNav}
                            />
                        </div>
                        <div className="header__right">
                            <SelectLang />
                            <HeaderCart />
                            <CallButton classes={'call-btn'} />
                            <Burger
                                burgerActive={burgerActive}
                                setBurgerActive={setBurgerActive}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
