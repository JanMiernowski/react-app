import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {withRouter} from "react-router";
import {getNaturalPersonBydId} from "../Common/Api"
import {getProduct} from "../Common/Api";



class NaturalPerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personName: null,
            email: null,
            bank: null,
            address: {
                street: null,
                city: null,
                zipCode: null,
                houseNumber: null
            },
            personalIdentityNumber: null,
            id: props.match.params.naturalPersonId,
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    async componentDidMount() {
        if(this.state.id){
            try{
                const data = await getNaturalPersonBydId(this.state.id);
                this.setState({
                        ...data
                    }
                )
            }catch (error){
                console.error(error);
            }
        }
        // if(!this.state.id){ }
    }

    async handleOnSubmit(event) {
        event.preventDefault(); //nie wiem co to
        let savedPerson;
        try {
            savedPerson = await axios.post('http://localhost:8080/contractor/addNaturalPerson', this.state);
            console.info('narutal person ', savedPerson.data);
            this.props.onSave({
                message : `Osoby prywatna o id ${savedPerson.data.id} została pomyślnie zapisana`,
                isError : false
            })
        } catch (error) {
            this.props.onSave({
                message : `Osoby prywatna o id ${savedPerson.data.id} nie została pomyślnie zapisana`,
                isError : true
            })
            console.error(error);
        }
        this.props.history.push('/contractor/showAllNaturalPersonList');

    }

    //todo homework do przemyslenia
    handleOnChange(event) {
        if(event.target.name === 'street' ||
            event.target.name === 'houseNumber' ||
            event.target.name === 'zipCode' ||
            event.target.name === 'city'
            ){
            this.setState({
                address : {
                    ...this.state.address,
                    [event.target.name]: event.target.value
                }
            })
        }
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

                    <h2>Adres:</h2>
                    <Label>
                        <h2 className={'text-center'}>Ulica:</h2>
                        <Input name={'street'} value={this.state.address.street} onChange={this.handleOnChange}/>
                    </Label>
                    <Label>
                        <h2 className={'text-center'}>Numer domu:</h2>
                        <Input name={'houseNumber'} value={this.state.address.houseNumber} onChange={this.handleOnChange}/>
                    </Label>
                    <Label>
                        <h2 className={'text-center'}>Ulica:</h2>
                        <Input name={'zipCode'} value={this.state.address.zipCode} onChange={this.handleOnChange}/>
                    </Label>
                    <Label>
                        <h2 className={'text-center'}>Miasto:</h2>
                        <Input name={'city'} value={this.state.address.city} onChange={this.handleOnChange}/>
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

export default withRouter(NaturalPerson);
