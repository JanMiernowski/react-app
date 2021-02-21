import logo from '../logo.svg';
import './App.css';
import React from 'react';
import Ticker from "../Ticker/Ticker";
import Product from "../Product/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contractor from "../Contractor/Contractor";
import ProductList from "../ProductList/ProductList";
import  { BrowserRouter, Link} from "react-router-dom";
import Route from "react-router-dom/Route";
import Message from "../Message/Message";
import NavMenu from "../NavMenu/NavMenu";
import ReactDOM from "react-dom";

class App extends React.Component{

    initialState = {
        message : {
            isError : null,
            visible : false,
            content : null,
        }
    }

    constructor(props) {
        super(props);

        this.state = {...this.initialState};

        this.onShowMessage = this.onShowMessage.bind(this);
    }

    onShowMessage(data){
        this.setState({
            message : {
                isError : data.isError,
                visible : true,
                content : data.message
            }
        })
        console.log(data);
    }

    render(){
        return(
            <BrowserRouter>
                <NavMenu/>
                <Message
                    color={this.state.message.isError === true ? 'danger' : 'success'}
                    visible={this.state.message.visible}
                    onDismiss={() =>this.setState({
                        ...this.initialState
                    })}
                    content={this.state.message.content}
                />

                <Route
                    exact
                    path={'/products'}
                    render={() =>
                        <ProductList onDelete={this.onShowMessage}/>
                    }
                />
                <Route
                    exact
                    path={['/products/add','/products/:productId']}
                    render={() =>
                        <Product onSave={this.onShowMessage} />
                    }
                />

            </BrowserRouter>
        );
    }
}

export default App;
