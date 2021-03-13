import React from "react";
import {useFormik} from 'formik';
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
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async (values, {setSubmitting})=> {

            try {
                const response = await login(values);
                setAuth(response);
                props.handleLogIn(true);
                history.push('/');
            } catch (error) {
                console.error(error);
            }
            setSubmitting(false);
        }
    });
    return (
        <div className={"login-form"}>
            <Form onSubmit={event => {
                event.preventDefault();
                formik.onSubmit(event);
            }}>
                <h2>Zaloguj się</h2>
                <FormGroup row>
                    <Label sm={3} for={'username'}>Użytkownik:</Label>
                    <Col sm={9}>
                        <Input name={'username'} value={formik.values.username} onChange={formik.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={3} for={'password'}>Hasło:</Label>
                    <Col sm={9}>
                        <Input type={"password"} name={'password'} value={formik.values.password}
                               onChange={formik.handleChange}/>
                    </Col>
                </FormGroup>

                <Input className={'btn-lg btn-dark btn-block'} type='submit' value='Dodaj'/>

            </Form>
        </div>
    );
}

export default LoginFormik;
