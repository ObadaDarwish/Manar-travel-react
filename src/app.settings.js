export const get_api_end_point = () => {
    let endPoint = 'http://localhost:3000';
    switch (process.env.REACT_APP_CUSTOM_ENV) {
        case 'development':
            endPoint = 'http://localhost:3000';
            break;
        case 'production':
            endPoint = 'http://localhost:3000';
            break;
        default:
            endPoint = 'envdsasda';
    }
    return endPoint;
};