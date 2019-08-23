import {createStore, combineReducers} from 'redux';

import {landingReducer} from './reducers/landing'
import {programsReducer} from "./reducers/programs";
import {manarProgramReducer} from "./reducers/manarProgram";
import {contactUsReducer} from "./reducers/contactus";

const reducers = combineReducers({
    landingReducer: landingReducer,
    programsReducer:programsReducer,
    manarProgramReducer:manarProgramReducer,
    contactUsReducer:contactUsReducer
})
const store = createStore(reducers);
export default store