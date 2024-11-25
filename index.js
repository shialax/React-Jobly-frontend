import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import { UserProvider } from './UserContext';

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>,
    document.getElementById('root')
);