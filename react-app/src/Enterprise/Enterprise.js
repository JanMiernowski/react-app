import React from "react";
import {Form, Input, Label} from "reactstrap";
import axios from "axios";
import SingleEnterprise from "../SingleEnterprise/SingleEnterprise";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
import { Formik } from 'formik'

class Enterprise extends React.Component{

    /*
    private String enterpriseName;
    private String taxNumber;
     */

    constructor(props) {
        super(props);

        this.state = {
            enterpriseName: '',
            email: '',
            bank: '',
            address: '',
            taxNumber: '',
            // enterprises : [{
            //     enterpriseName: '',
            //     email: '',
            //     bank: '',
            //     address: '',
            //     taxNumber: '',
            // }],
            enterprises : [{
                id: '',
                employee_name: '',
                employee_salary: '',
                employee_age: '',
                profile_image: '',
            }],

        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {
        try {
            // const response = await axios.get('http://localhost:8080/contractor/showAllEnterprises');
            const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
            console.log(response);
            const enterprises = response.data.data;
            this.setState({
                enterprises: enterprises,
            });
        } catch (error) {
            console.error(error);
        }
    }

    async handleOnSubmit(values) {
//        event.preventDefault(); //nie wiem co to
        try {
            const savedEnterprise = await axios.post('http://localhost:8080/contractor/addEnterprise', values);
            console.info('saved enterprise ', savedEnterprise.data);
        } catch (error) {
            console.error(error);
        }
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {

        let enterprises = null;

        enterprises = this.state.enterprises.map(enterprise =>{
            return(
                  // <SingleEnterprise enterpriseName={enterprise.enterpriseName}
                  //                   email={enterprise.email}
                  //                   bank={enterprise.bank}
                  //                   address={enterprise.address}
                  //                   taxNumber={enterprise.taxNumber}  />
                /*
                id: null,
                employee_name: '',
                employee_salary: 0,
                employee_age: 0,
                profile_image: '',
                 */

                <SingleEmployee id={enterprise.id}
                                employee_name={enterprise.employee_name}
                                employee_salary={enterprise.employee_salary}
                                employee_age={enterprise.employee_age}
                                profile_image={enterprise.profile_image}
                />
            )
        })

        return(
            <div className={'login-form'}>

                {enterprises}

                <Formik
                  initialValues={this.state}
                  onSubmit={this.handleOnSubmit}
                >
                    {
                        ({
                           values,
                           handleChange,
                           handleOnSubmit,
                        }) => (
                            <Form onSubmit={handleOnSubmit}>
                                <Label>
                                    <h2 className={'text-center'}>Nazwa firmy:</h2>
                                    <Input name={'enterpriseName'} value={values.enterpriseName} onChange={handleChange}/>
                                </Label>

                                <Label>
                                    <h2 className={'text-center'}>Email:</h2>
                                    <Input name={'email'} value={values.email} onChange={handleChange}/>
                                </Label>

                                <Label>
                                    <h2 className={'text-center'}>Bank:</h2>
                                    <Input name={'bank'} value={values.bank} onChange={handleChange}/>
                                </Label>

                                <Label>
                                    <h2 className={'text-center'}>Adres:</h2>
                                    <Input name={'address'} value={values.address} onChange={handleChange}/>
                                </Label>

                                <Label>
                                    <h2 className={'text-center'}>NIP:</h2>
                                    <Input name={'taxNumber'} value={values.taxNumber}
                                           onChange={handleChange}/>
                                </Label>

                                <button className={'btn-lg btn-dark btn-block'} type="submit">Dodaj</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default Enterprise;
