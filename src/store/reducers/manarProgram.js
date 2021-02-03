import {MANAR_PROGRAM} from '../actions'

export const manarProgramReducer = (state = {
    program: '',
    isProgramLoading: true,
}, action) => {
    if (action.type === MANAR_PROGRAM) {
        return {...state, ...action.payload}
    }
    return state
};
