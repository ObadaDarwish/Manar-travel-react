import  {PROGRAMS} from '../actions'
export const programsReducer = (state ={
    programs: [],
    isLoadingPrograms: true
}, action) => {
    if (action.type === PROGRAMS) {
        return {...state, ...action.payload}
    }
    return state
};
