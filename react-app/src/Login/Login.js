import React from "react";
import {withRouter} from "react-router";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import  {login} from "../Common/Api";
import {setAuth} from "../Common/LocalStorageService";

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    async handleOnSubmit(event) {
        event.preventDefault();
        try{
            const response = await login(this.state);
            setAuth(response);
            this.props.history.push('/');
        }catch (error){
            console.error(error);
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return(
            <div className={"login-form"}>
                <Form onSubmit={this.handleOnSubmit}>
                    <h2>Zaloguj się</h2>
                    <FormGroup row>
                        <Label sm={3} for={'username'}>Użytkownik:</Label>
                        <Col sm={9}>
                            <Input name={'username'} value={this.state.username} onChange={this.handleOnChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3} for={'password'}>Hasło:</Label>
                        <Col sm={9}>
                            <Input type={"password"} name={'password'} value={this.state.password} onChange={this.handleOnChange}/>
                        </Col>
                    </FormGroup>

                    <Input className={'btn-lg btn-dark btn-block'} type='submit' value='Dodaj'/>

                </Form>
            </div>
        );
    }
}

export default withRouter(Login);
