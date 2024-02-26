import React from 'react';
import ReactDOM from "react-dom/client";
import Admin from './admin/admin';
import Client from './client/client';
import "./presentation.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Admin />
            <Client />
        </BrowserRouter>
    </React.StrictMode>
);