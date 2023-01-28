import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import './18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </Provider>
    </BrowserRouter>
);
