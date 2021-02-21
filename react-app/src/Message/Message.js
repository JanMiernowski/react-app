import React from "react";
import {Alert} from "reactstrap";
import PropTypes from 'prop-types';

class Message extends React.Component{

    render() {
        return(
            <Alert color={this.props.color} isOpen={this.props.visible} toggle={this.props.onDismiss}>
                {this.props.content}
            </Alert>
        );
    }
}

Message.propTypes = {
    color : PropTypes.string.isRequired,
    visible : PropTypes.bool.isRequired,
    content : PropTypes.string.isRequired,
    onDismiss : PropTypes.func.isRequired
}

Message.defaultProps = {
    color : 'success',
}

export default Message;
