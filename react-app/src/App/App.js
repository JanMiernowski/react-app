import './App.css';
import React from 'react';
import Product from "../Product/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "../ProductList/ProductList";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Message from "../Message/Message";
import NavMenu from "../NavMenu/NavMenu";
import NaturalPerson from "../NaturalPerson/NaturalPerson";
import NaturalPersonList from "../NaturalPersonList/NaturalPersonList";
import LoginFormik from "../LoginFormik/LoginFormik";
import Home from '../Home/Home';
import { registerInterceptors } from "../Common/Interceptors";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {withRouter} from "react-router";
import {isLogged} from "../Common/LocalStorageService";

class App extends React.Component {

    initialState = {
        message: {
            isError: null,
            visible: false,
            content: null,
        },
        isLogged: isLogged()
    }

    constructor(props) {
        super(props);

        this.state = {...this.initialState};

        registerInterceptors();
        this.onShowMessage = this.onShowMessage.bind(this);
        this.onUserLoggedIn = this.onUserLoggedIn.bind(this);
    }

    onShowMessage(data) {
        this.setState({
            message: {
                isError: data.isError,
                visible: true,
                content: data.message
            }
        })
        console.log(data);
    }

    onUserLoggedIn(isLogged){
        this.setState({
            isLogged : isLogged
        })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    {this.state.isLogged ? <NavMenu /> : null}
                    <Message
                        color={this.state.message.isError === true ? 'danger' : 'success'}
                        visible={this.state.message.visible}
                        onDismiss={() => this.setState({
                            ...this.initialState
                        })}
                        content={this.state.message.content}
                    />
                    <Switch>
                        <PrivateRoute
                            exact
                            path={'/'}
                            render={() =>
                                <Home/>
                            }
                        />
                        <PrivateRoute
                            exact
                            path={'/products'}
                            render={() =>
                                <ProductList onDelete={this.onShowMessage}/>
                            }
                        />
                        <PrivateRoute
                            exact
                            path={['/products/add', '/products/edit/:productId']}
                            render={() =>
                                <Product onSave={this.onShowMessage}/>
                            }
                        />
                        <PrivateRoute
                            exact
                            path={'/contractor/showAllNaturalPersonList'}
                            render={() =>
                                <NaturalPersonList onDelete={this.onShowMessage}/>
                            }
                        />
                        <PrivateRoute
                            exact
                            path={['/contractor/naturalPerson/add', '/contractor/naturalPerson/edit/:naturalPersonId']}
                            render={() =>
                                <NaturalPerson onSave={this.onShowMessage}/>
                            }
                        />
                        <Route
                            exact
                            path={'/login'}
                            render={() =>
                                <LoginFormik handleLogIn={this.onUserLoggedIn}/>
                            }
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
