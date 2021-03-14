import React from "react";
import {Field, Formik} from 'formik';
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import {login} from "../Common/Api";
import {isLogged, setAuth} from "../Common/LocalStorageService";
import {useHistory} from "react-router";
import {useEffect} from "react";
import * as Yup from 'yup';
import "./LoginFormik.css";


const LoginFormik = (props) => {
    const history = useHistory();
    useEffect(() => {
        if (isLogged()) {
            history.goBack();
        }
        props.handleLogIn(false);
    }, []);
    const validationSchema = Yup.object().shape({
        username : Yup.string()
            .min(4, "Nazwa użytkownika jest za krótka")
            .required("Nazwa użytkownika nie powinna być pusta"),
        password : Yup.string()
            .min(4, "Hasło jest za krótke")
    });
    return (
        <div className={"login-form"}>
            <Formik
                validationSchema={validationSchema}
                onSubmit={async (values, {setSubmitting}) => {
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
                initialValues={{username: '', password: ''}}
            >
                {({
                      handleSubmit,
                      handleChange,
                      values,
                      isSubmitting,
                      errors,
                      touched
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Zaloguj się</h2>
                        <FormGroup row>
                            <Label sm={3} for={'username'}>Użytkownik:</Label>
                            <Col sm={12}>
                                <Input name={'username'} value={values.username} onChange={handleChange}/>
                                {errors.username && touched.username ? <div className={"error-form"}> {errors.username}</div> : null}
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3} for={'password'}>Hasło:</Label>
                            <Col sm={12}>
                                <Input type={"password"} name={'password'} value={values.password}
                                       onChange={handleChange}/>
                                {errors.password && touched.password ? <div className={"error-form"}> {errors.password}</div> : null}
                            </Col>
                        </FormGroup>

                        <Input className={'btn-lg btn-dark btn-block'} disabled={isSubmitting} type='submit' value='Dodaj'/>

                    </form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
