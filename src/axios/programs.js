import axios from 'axios';


export const getUmrahProgram = (code) => {
    return axios.get(process.env.REACT_APP_DEV_ENDPOINT + '/getManarUmrahProgram/' + code)
}

export const getHajjProgram = (code) => {
    return axios.get(process.env.REACT_APP_DEV_ENDPOINT + '/getManarHajjProgram/' + code)
}

export const getAllManarPrograms = () => {
    return axios.get(process.env.REACT_APP_DEV_ENDPOINT + '/getAllManarPrograms');
}

export default getAllManarPrograms();