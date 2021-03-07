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
import Login from "../Login/Login";
import { registerInterceptors } from "../Common/Interceptors";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {withRouter} from "react-router";

class App extends React.Component {

    initialState = {
        message: {
            isError: null,
            visible: false,
            content: null,
        }
    }

    constructor(props) {
        super(props);

        this.state = {...this.initialState};

        registerInterceptors();
        this.onShowMessage = this.onShowMessage.bind(this);
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

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavMenu/>
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
                            <Login/>
                        }
                    />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
