import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";



class NaturalPerson extends Component {

    /*
    private Long id;
    private String email;
    private String bank;
    private String address;
    private String personName;
    private String personalIdentityNumber;
     */

    constructor(props) {
        super(props);

        this.state = {
            personName: '',
            email: '',
            bank: '',
            address: '',
            personalIdentityNumber: '',
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    async handleOnSubmit(event) {
        event.preventDefault(); //nie wiem co to
        try {
            const savedPerson = await axios.post('http://localhost:8080/contractor/addNaturalPerson', this.state);
            alert('saved narular person ' + savedPerson.data.personName);
            console.info('narutal person ', savedPerson.data);
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


        return (
            <div className={'login-form'}>
                <Form onSubmit={this.handleOnSubmit}>
                    <Label>
                        <h2 className={'text-center'}>Imię i nazwisko:</h2>
                        <Input name={'personName'} value={this.state.personName} onChange={this.handleOnChange}/>
                    </Label>

                    <Label>
                        <h2 className={'text-center'}>Email:</h2>
                        <Input name={'email'} value={this.state.email} onChange={this.handleOnChange}/>
                    </Label>

                    <Label>
                        <h2 className={'text-center'}>Bank:</h2>
                        <Input name={'bank'} value={this.state.bank} onChange={this.handleOnChange}/>
                    </Label>

                    <Label>
                        <h2 className={'text-center'}>Adres:</h2>
                        <Input name={'address'} value={this.state.address} onChange={this.handleOnChange}/>
                    </Label>

                    <Label>
                        <h2 className={'text-center'}>PESEL:</h2>
                        <Input name={'personalIdentityNumber'} value={this.state.personalIdentityNumber}
                               onChange={this.handleOnChange}/>
                    </Label>

                    <input className={'btn-lg btn-dark btn-block'} type="submit" value='Dodaj'/>
                </Form>
            </div>
        );
    }
}

export default NaturalPerson;
