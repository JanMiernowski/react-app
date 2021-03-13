import React from "react";
import {Formik} from 'formik';
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import {login} from "../Common/Api";
import {isLogged, setAuth} from "../Common/LocalStorageService";
import {useHistory} from "react-router";
import {useEffect} from "react";


const LoginFormik = (props) => {
    const history = useHistory();
    useEffect(() => {
        if(isLogged()){
            history.goBack();
        }
        props.handleLogIn(false);
    }, []);
    return (
        <div className={"login-form"}>
          <Formik
            onSubmit = {async (values, {setSubmitting})=> {
                                       try {
                                           const response = await login(values);
                                           setSubmitting(false);
                                           setAuth(response);
                                           props.handleLogIn(true);
                                           history.push('/');
                                       } catch (error) {
                                           setSubmitting(false);
                                           console.error(error);
                                       }
                                   }
            }
            initialValues = {{username: '', password: ''}}
          >
            {({
                handleSubmit,
                handleChange,
                values
            }) => (
            <form onSubmit={handleSubmit}>
                <h2>Zaloguj się</h2>
                <FormGroup row>
                    <Label sm={3} for={'username'}>Użytkownik:</Label>
                    <Col sm={9}>
                        <Input name={'username'} value={values.username} onChange={handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={3} for={'password'}>Hasło:</Label>
                    <Col sm={9}>
                        <Input type={"password"} name={'password'} value={values.password}
                               onChange={handleChange}/>
                    </Col>
                </FormGroup>

                <Input className={'btn-lg btn-dark btn-block'} type='submit' value='Dodaj'/>

            </form>
            )}
          </Formik>
        </div>
    );
}

export default LoginFormik;
