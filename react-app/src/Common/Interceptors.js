import axios from "axios";
import {getAuth, setAuth} from "./LocalStorageService";


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

    axios.interceptors.response.use(
        (config) => {
            const auth = getAuth();
            const authHeader = config.headers.Authorization;
            if(authHeader){
                auth.token = authHeader.substring(7);
                setAuth(auth);
            }
            if(config.status===401){
                window.location.href='/login';
            }
            return config;
        },(error )=> {
        return Promise.reject(error);
        }
    );
}

export {registerInterceptors};

