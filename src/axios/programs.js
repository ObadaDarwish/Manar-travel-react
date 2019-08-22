import axios from 'axios';
import {get_api_end_point} from '../app.settings'

export const getUmrahProgram = (code) => {
    return axios.get(get_api_end_point() + '/programs/getManarUmrahProgram/' + code)
}

export const getHajjProgram = (code) => {
    return axios.get(get_api_end_point() + '/programs/getManarHajjProgram/' + code)
}

export const getAllManarPrograms = () => {
    return axios.get(get_api_end_point() + '/programs/getAllManarPrograms');
}

