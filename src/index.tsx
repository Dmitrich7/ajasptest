import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

async function enableMocking() {
    const { worker } = await import('./mocks/browser')
    return worker.start()
}

enableMocking().then(()=>{
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
})
