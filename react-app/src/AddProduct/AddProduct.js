import React from "react";
import VAT from "../Constants";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


class AddProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            priceNet: 0,
            vat: '',
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.renderVat = this.renderVat.bind(this);
    }

    async handleOnSubmit(event) {
        event.preventDefault();
        try {
            const savedProduct = await axios.post('http://localhost:8080/products', this.state);
            alert('saved product ' + savedProduct.data);
            console.info('saved product ', savedProduct.data);
        } catch (error) {
            console.error(error);
        }
    }

    handleOnChange(event) {
        // const newState = {};
        // newState[event.target.name] = event.target.value;
        // this.setState(newState);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    renderVat() {
        let options = [];
        options.push(
            <option value={''}/>
        )
        for (let element of VAT) {
            options.push(
                <option value={element.name}>
                    {element.value}
                </option>
            )
        }
        return (
            <Label>
                Vat:
                <select name={'vat'} value={this.state.vat} onChange={this.handleOnChange}>
                    {options}
                </select>
            </Label>
        );
    }


    render() {
        return (

            <div className={'login-form'}>
                <FormGroup onSubmit={this.handleOnSubmit}>
                    <Label>
                        <h2 className={'text-center'}>Nazwa:</h2>
                        <Input name={'name'} value={this.state.name} onChange={this.handleOnChange}/>
                    </Label>
                    <Label>
                        <h2 className={'text-center'}>Opis:</h2>
                        <Input name={'description'} value={this.state.description} onChange={this.handleOnChange}/>
                    </Label>
                    <Label>
                        <h2 className={'text-center'}>Cena:</h2>
                        <Input name={'priceNet'} value={this.state.priceNet} onChange={this.handleOnChange}/>
                    </Label>
                        {this.renderVat()}

                    <Input className={'btn-lg btn-dark btn-block'} type='submit' value='Dodaj'/>
                </FormGroup>
            </div>
        );
    }

}

export default AddProduct;
