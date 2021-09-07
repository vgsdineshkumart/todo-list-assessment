import React from 'react';
import AppRouter from './core/router';
import {Provider} from 'react-redux';
import store from './core/store';

export const API_ENDPOINT = 'https://dev-dl.tdcx.com:3092'
export const API_KEY = '0211b92f9594a5ac'

function App() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
