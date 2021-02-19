import React from "react";
import Enterprise from "../Enterprise/Enterprise"
import NaturalPerson from "../NaturalPerson/NaturalPerson"
import VAT from "../Constants";
import {Label} from "reactstrap";

class Contractor extends React.Component{

    naturalPerson = 'Osoba fizyczna';
    enterprise = 'Przedsiębiorstwo';

    constructor(props) {
        super(props);

        this.state = {
            contractorType : this.naturalPerson,
        }

        this.renderContractorType = this.renderContractorType.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState(
            {
                [event.target.name] : event.target.value,
            }
        )
    }


    renderContractorType() {
        return (
            <Label>
                <select name={'contractorType'} value={this.state.contractorType} onChange={this.handleOnChange}>
                    <option value={this.naturalPerson}>
                        {this.naturalPerson}
                    </option>
                    <option value={this.enterprise}>
                        {this.enterprise}
                    </option>
                </select>
            </Label>
        );
    }


    render() {


        return(
            <div>
                {this.renderContractorType()}
                {this.state.contractorType === this.naturalPerson ? <NaturalPerson /> : <Enterprise />}
            </div>


        );
    }
}

export default Contractor;
