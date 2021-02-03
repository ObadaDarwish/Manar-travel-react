import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {Provider} from "react-redux";
import store from './store/store'
import Landing from "./components/landing/landing";
import ManarProgram from "./components/manar-program/manar-program";
import Programs from "./components/programs/programs";

require('dotenv').config()

function App() {


    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header/>
                    <NotificationContainer/>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/manar-program/:code/:id" component={ManarProgram}/>
                        <Route path="/manar-programs" component={Programs}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
