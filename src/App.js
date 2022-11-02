import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './redux';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ProductPage from './components/pages/ProductPage';

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
        <Provider store={store}>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="shop/:title" element={<ProductPage />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Provider>
    );
}

export default App;
