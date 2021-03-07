import axios from "axios";
import {getAuth} from "./LocalStorageService";


function registerInterceptors()
{
    axios.interceptors.request.use(
        (config) => {
            const authItem = getAuth();
            const token = authItem ? authItem.token : null;
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}

export {registerInterceptors};

