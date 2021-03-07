import React from "react";
import {withRouter} from "react-router";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    async handleOnSubmit(event) {
        event.preventDefault();

    }

    handleOnChange(event) {
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
                        <Label sm={3} for={'login'}>Użytkownik:</Label>
                        <Col sm={9}>
                            <Input name={'login'} value={this.state.login} onChange={this.handleOnChange}/>
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
