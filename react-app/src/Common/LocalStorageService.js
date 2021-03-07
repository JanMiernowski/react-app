
const AUTHORIZATION_KEY= 'authorization';

const getAuth = () => {
    return JSON.parse(localStorage.getItem(AUTHORIZATION_KEY));
}

const setAuth = (value) => {
    localStorage.setItem(AUTHORIZATION_KEY, JSON.stringify(value));
}

export {getAuth, setAuth};
