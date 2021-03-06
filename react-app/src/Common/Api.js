import axios from "axios";
import {SERVER_URL} from "../Constants";

const PRODUCTS_BASE_PATH = SERVER_URL + "products/";
const CONTRACTOR_BASE_PATH = SERVER_URL + "contractor/";

async function getProduct(id){
   return (await axios.get(PRODUCTS_BASE_PATH + id)).data;
}

//todo reszta wywolan api

async function search(name){
    return (await axios.get(PRODUCTS_BASE_PATH + `search?name=${name}`)).data;
}

async function getContactorsList(){
    return (await axios.get(CONTRACTOR_BASE_PATH + 'showAllEnterprises')).data;
}

async function getNaturalPersonList(){
    return (await  axios.get(CONTRACTOR_BASE_PATH + 'showAllNaturalPersons')).data;
}

async function getNaturalPersonBydId(id){
    return (await axios.get(CONTRACTOR_BASE_PATH + 'getNaturalPersonById/' + id)).data;
}
export {
    getProduct, search, getContactorsList, getNaturalPersonList, getNaturalPersonBydId,
};
