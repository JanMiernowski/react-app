import React from "react";
import VAT from "../Constants";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Col} from "reactstrap";


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
            <FormGroup row>
                <Label for={'vat'} sm={3}>
                    Vat:
                </Label>
                <Col sm={9}>
                    <Input type={'select'} name={'vat'} value={this.state.vat} onChange={this.handleOnChange}>
                        {options}
                    </Input>
                </Col>
            </FormGroup>
        );
    }


    render() {
        return (

            <div className={'login-form'}>
                <Form onSubmit={this.handleOnSubmit}>

                    <FormGroup row>
                        <Label sm={3} for={'name'}>Nazwa:</Label>
                        <Col sm={9}>
                            <Input name={'name'} value={this.state.name} onChange={this.handleOnChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3} for={'description'}>Opis:</Label>
                        <Col sm={9}>
                            <Input name={'description'} value={this.state.description} onChange={this.handleOnChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3} for={'priceNet'}>Cena:</Label>
                        <Col sm={9}>
                            <Input name={'priceNet'} value={this.state.priceNet} onChange={this.handleOnChange}/>
                        </Col>
                    </FormGroup>

                    {this.renderVat()}

                    <Input className={'btn-lg btn-dark btn-block'} type='submit' value='Dodaj'/>

                </Form>
            </div>
        );
    }
}

export default AddProduct;
