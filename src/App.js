import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {Provider} from "react-redux";
import store from './store/store'

require('dotenv').config()

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header/>
                    <NotificationContainer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
