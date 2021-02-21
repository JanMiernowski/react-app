import axios from "axios";
import {SERVER_URL} from "../Constants";

const PRODUCTS_BASE_PATH = SERVER_URL + "products/";

async function getProduct(id){
   return (await axios.get(PRODUCTS_BASE_PATH + id)).data;
}

//todo reszta wywolan api

export {
    getProduct
};
