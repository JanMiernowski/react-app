import React from "react";
import axios from "axios";
import {Table, Button} from "reactstrap";
import './ProductList.css'
import { withRouter } from "react-router";
import Product from "../Product/Product";
import PropTypes from 'prop-types';


class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }

        this.renderRows = this.renderRows.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const response = await axios.get('http://localhost:8080/products');
        console.log(response.data);
        this.setState({
                products: response.data
            }
        )
    }

    async handleOnDelete(event) {
        console.log(event);
        const id = event.target.getAttribute('selectedid');
        try{
            const response = await axios.delete('http://localhost:8080/products/' + id);
            this.getProducts();
            this.props.onDelete({
                message : `Produkt o id ${id} został pomyślnie usunięty`,
                isError : false
            })
            console.info(response);
        }catch (error){
            this.props.onDelete({
                message : `Produkt o id ${id} nie został usunięty ${error}`,
                isError : true
            })
            console.error(error);
        }
    }

    handleAdd() {
        this.props.history.push('/products/add');
    }

    handleOnEdit(event) {
        const id = event.target.getAttribute('selectedid');
        this.props.history.push('/products/' + id);
    }

    renderRows() {
        return this.state.products.map(element => {
            return(
                <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td>{element.priceNet}</td>
                    <td>{element.vat}</td>
                    <td>
                        <Button selectedid={element.id} color={'info'} onClick={this.handleOnEdit}>Edycja</Button>
                        <span>&nbsp;&nbsp;</span>
                        <Button selectedid={element.id} color={'danger'} onClick={this.handleOnDelete}>Usuń</Button>
                    </td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <div className={'add-product-button-container'}>
                    <Button className={'add-product-button'} color={'success'} onClick={this.handleAdd}>Dodaj produkt</Button>
                </div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Cena</th>
                        <th>Vat</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

ProductList.propTypes = {
    onDelete : PropTypes.func.isRequired
}

export default withRouter(ProductList);
