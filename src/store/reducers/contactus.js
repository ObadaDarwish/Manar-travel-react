export const contactUsReducer = (state = {
    first_name: {
        value: '',
        validation: {
            required: true
        },
        errorMessage: '',
        is_valid: false,
        is_touched: false
    },
    last_name: {
        value: '',
        validation: {
            required: true
        },
        errorMessage: '',
        is_valid: false,
        is_touched: false
    },
    message: {
        value: '',
        validation: {
            required: true,
            min_length: 5
        },
        errorMessage: '',
        is_valid: false,
        is_touched: false
    },
    email: {
        value: '',
        validation: {
            required: true,
            pattern: '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        },
        errorMessage: '',
        is_valid: false,
        is_touched: false
    },
    mobile: {
        value: '',
        validation: {
            required: true
        },
        errorMessage: '',
        is_valid: false,
        is_touched: false
    },
    is_form_valid: false
}, action) => {
    console.log(action);
    if (action.type === 'contactUsState') {
        // let updatedState = action.payload
        return state = action.payload
    }
    return state
};
