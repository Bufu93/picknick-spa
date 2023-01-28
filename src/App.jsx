import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ModalContact from './components/ModalContact/ModalContact.jsx';
import { useSelector } from 'react-redux';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ProductPage from './components/pages/ProductPage';
import ThxMessage from './components/UI/ThxMessage/ThxMessage.jsx';

function App() {
    const modalState = useSelector((state) => state.modal.isOpen);
    const thxMessageState = useSelector((state) => state.thx.isOpen);
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
        <>
            {thxMessageState && (
                <ThxMessage title={'Заявка отправлена'}>
                    Спасибо! Мы скоро с вами свяжемся.
                </ThxMessage>
            )}
            {modalState && <ModalContact />}
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
        </>
    );
}

export default App;
