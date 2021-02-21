import React from "react";
import {Alert} from "reactstrap";

class Message extends React.Component{

    render() {
        return(
            <Alert color={this.props.color} isOpen={this.props.visible} toggle={this.props.onDismiss}>
                {this.props.content}
            </Alert>
        );
    }
}

export default Message;
