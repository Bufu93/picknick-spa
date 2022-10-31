import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Shop from './components/pages/Shop';
import NotFound from './components/pages/NotFound';
import MainLayout from './components/MainLayout/MainLayout';
import { useEffect } from 'react';

function App() {
    let location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
