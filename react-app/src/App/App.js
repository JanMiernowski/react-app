import logo from '../logo.svg';
import './App.css';
import React from 'react';
import Ticker from "../Ticker/Ticker";
import AddProduct from "../AddProduct/AddProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contractor from "../Contractor/Contractor";
import ProductList from "../ProductList/ProductList";

class App extends React.Component{
    render(){
        return(
            <div>
                <ProductList />
            </div>
        );
    }
}

export default App;
