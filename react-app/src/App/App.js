import logo from '../logo.svg';
import './App.css';
import React from 'react';
import Ticker from "../Ticker/Ticker";
import AddProduct from "../AddProduct/AddProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contractor from "../Contractor/Contractor";
import ProductList from "../ProductList/ProductList";
import  { BrowserRouter, Link} from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>Strona główna</Link>
                        </li>
                        <li>
                            <Link to={'/products'}>Produkty</Link>
                        </li>
                    </ul>
                </div>
                <Route exact path={'/products'} component={ProductList} />
                <Route exact path={['/products/add','/products/:productId']} component={AddProduct} />

            </BrowserRouter>
        );
    }
}

export default App;
