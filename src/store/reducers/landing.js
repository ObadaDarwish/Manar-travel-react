import  {LANDING} from '../actions'
export const landingReducer = (state = {
    manarPrograms: [],
    loadingManarPrograms: true
}, action) => {
    if (action.type === LANDING) {
        return {...state, ...action.payload};
    }
    return state
};
