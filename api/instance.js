import axios from "axios";

const instance = axios.create({
    baseURL: 'https://doro.kz/library/Api',
})

export default instance
