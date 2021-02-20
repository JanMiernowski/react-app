import React from "react";
import axios from "axios";
import {Table, Button} from "reactstrap";

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }

        this.renderRows = this.renderRows.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
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
            console.info(response);
        }catch (error){
            console.error(error);
        }
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
                        <Button color={'info'}>Edycja</Button>
                        <span>&nbsp;&nbsp;</span>
                        <Button selectedid={element.id} color={'danger'} onClick={this.handleOnDelete}>Usuń</Button>
                    </td>
                </tr>
            );
        })
    }

    render() {
        /*
        private Long id;
    private String name;
    private String description;
    private BigDecimal priceNet;
    private Product.Vat vat;
         */

        return (
            <div>
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

export default ProductList;
