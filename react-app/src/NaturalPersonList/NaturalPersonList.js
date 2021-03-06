import React from "react";
import NaturalPerson from "../NaturalPerson/NaturalPerson";
import {withRouter} from "react-router";
import {Button, Table} from "reactstrap";
import Search from "../Search/Search";
import {getNaturalPersonList} from "../Common/Api";
import axios from "axios";
import PropTypes from "prop-types";


class NaturalPersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            naturalPersonList: []
        }
        console.log(props);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    componentDidMount() {
        this.getContractors()
    }

    async getContractors() {
        this.setState({
            naturalPersonList : await getNaturalPersonList()
        })
        console.log(this.state.naturalPersonList)

    }

    renderRows = () => {
        return this.state.naturalPersonList.map(element => {
            return <tr>
                <th>{element.id}</th>
                <th>{element.email}</th>
                <th>{element.bank}</th>
                <th>{element.personName}</th>
                <th>{element.personalIdentityNumber}</th>
                <td>
                    <Button selectedid={element.id} color={'info'} onClick={this.handleOnEdit}>Edycja</Button>
                    <span>&nbsp;&nbsp;</span>
                    <Button selectedid={element.id} color={'danger'} onClick={this.handleOnDelete}>Usuń</Button>
                </td>
                <th/>
            </tr>
        })
    }

    handleAdd = () => {
        this.props.history.push('/contractor/naturalPerson/add');
    }

    async handleOnDelete(event){
        console.log(event);
        const id = event.target.getAttribute('selectedid');
        try{
            const response = await axios.delete('http://localhost:8080/contractor/deleteNaturalPerson/' + id);
            this.getContractors();
            this.props.onDelete({
                message : `Osoba prywatna o id ${id} została pomyślnie usunięta`,
                isError : false
            })
            console.info(response);
        }catch (error){
            this.props.onDelete({
                message : `Osoba prywatna o id ${id} nie została usunięta ${error}`,
                isError : true
            })
            console.error(error);
        }
    }

    async handleOnEdit(event){
        console.log(event);
        const id = event.target.attributes.selectedid.value;
        this.props.history.push('/contractor/naturalPerson/edit/' + id);

    }


    render() {
        return (
            <div>
                <div className={'add-product-button-container'}>
                    <Button className={'add-product-button'} color={'success'} onClick={this.handleAdd}>Dodaj
                        osobę prywatną</Button>
                </div>
                <Search onReloadItems={this.refresh}/>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Bank</th>
                        <th>Person Name</th>
                        <th>Personal Identity Number</th>
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

NaturalPersonList.propTypes = {
    onDelete : PropTypes.func.isRequired
}

export default withRouter(NaturalPersonList);
