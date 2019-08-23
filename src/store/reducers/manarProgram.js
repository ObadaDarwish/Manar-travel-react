export const manarProgramReducer = (state = {
    program: '',
    isProgramLoading: true,
}, action) => {
    if (action.type === 'manarProgramState') {
        return state = action.payload
    }
    return state
};
