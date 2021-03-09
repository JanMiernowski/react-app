import axios from "axios";
import {getAuth, setAuth, isLogged} from "./LocalStorageService";


function registerInterceptors()
{
    axios.interceptors.request.use(
        (config) => {
            const authItem = getAuth();
            const token = isLogged() ? authItem.token : null;
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (config) => {
            return config;
        },(error )=> {
            if(error.response.status===401){
                setAuth(null);
                window.location.href='/login';
            }
            return Promise.reject(error);
        }
    );
}

export {registerInterceptors};
