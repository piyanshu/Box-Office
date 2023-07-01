import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);

reportWebVitals();