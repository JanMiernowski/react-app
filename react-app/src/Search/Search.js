import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Search.css";
import PropTypes from 'prop-types';
import {search} from '../Common/Api';
class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name : null,
        }

        this.onSearch = this.onSearch.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    async onSearch(event) {
        console.log(event);
        const products = await search(this.state.name);
        this.props.onReloadItems(products);
    }

    render() {
        return(
            <div className={'search-container'}>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="name" className="mr-sm-2">Nazwa:</Label>
                        <Input type="text" value={this.state.name} onChange={this.handleOnChange} name="name" id="name" placeholder="wprowadź tekst" />
                    </FormGroup>
                    <Button onClick={this.onSearch}>Szukaj</Button>
                </Form>
            </div>
        );
    }
}

Search.propTypes = {
    onReloadItems : PropTypes.func.isRequired
}

export default Search;
