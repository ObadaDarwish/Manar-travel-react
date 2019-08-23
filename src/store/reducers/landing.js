export const landingReducer = (state = {
    manarPrograms: [],
    loadingManarPrograms: true
}, action) => {
    if (action.type === 'landingState') {
        return state = action.payload
    }
    return state
};
