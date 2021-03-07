import axios from "axios";
function registerInterceptors()
{
    axios.interceptors.request.use(
        (config) => {
            const authItem = localStorage.getItem('authorization');
            const token = authItem ? JSON.parse(authItem).token : null;
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

