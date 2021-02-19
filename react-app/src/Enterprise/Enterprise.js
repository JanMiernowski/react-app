import React from "react";
import {Form, Input, Label} from "reactstrap";
import axios from "axios";

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
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    async handleOnSubmit(event) {
        event.preventDefault(); //nie wiem co to
        try {
            const savedEnterprise = await axios.post('http://localhost:8080/contractor/addEnterprise', this.state).then(response => {
                console.log(response)
            });
            alert('saved enterprise ' + savedEnterprise.data);
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
        return(
            <div className={'login-form'}>
                <Form onSubmit={this.handleOnSubmit}>
                    <Label>
                        <h2 className={'text-center'}>Nazwa firmy:</h2>
                        <Input name={'enterpriseName'} value={this.state.enterpriseName} onChange={this.handleOnChange}/>
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
                        <h2 className={'text-center'}>NIP:</h2>
                        <Input name={'taxNumber'} value={this.state.taxNumber}
                               onChange={this.handleOnChange}/>
                    </Label>

                    <input className={'btn-lg btn-dark btn-block'} type="submit" value='Dodaj'/>
                </Form>
            </div>
        );
    }
}

export default Enterprise;
