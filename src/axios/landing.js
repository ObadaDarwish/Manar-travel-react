import axios from 'axios';


export const GetAllManarPrograms = () => {
    return axios.get(process.env.REACT_APP_DEV_ENDPOINT + '/getAllManarPrograms')
}


export const ContactUsMessage = (body) => {
    return axios.post(process.env.REACT_APP_DEV_ENDPOINT + '/contactUS', body)
}