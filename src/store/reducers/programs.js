export const programsReducer = (state ={
    programs: [],
    isLoadingPrograms: true
}, action) => {
    console.log(action);
    if (action.type === 'programsState') {
        return action.payload
    }
    return state
};
