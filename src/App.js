import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
require('dotenv').config()

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <NotificationContainer/>
            </div>

        </Router>
    );
}

export default App;
