export const get_api_end_point = () => {
    let endPoint = 'http://localhost:3001';
    console.log(process.env.NODE_ENV)
    switch (process.env.NODE_ENV) {
        case 'production':
            endPoint = 'https://manartravel.uc.r.appspot.com';
            break;
        default:
            endPoint = 'http://localhost:3001';
    }
    return endPoint;
};
