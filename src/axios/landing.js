import axios from 'axios';
import {get_api_end_point} from '../app.settings'

export const GetManarPrograms = () => {
    return axios.get(get_api_end_point() + '/programs/getAllManarPrograms')
}


export const ContactUsMessage = (body) => {
    return axios.post(get_api_end_point() + '/contactUS', body)
}