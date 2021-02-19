import React from 'react';

class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        }
    }
        componentDidMount()
        {
            this.interval = setInterval(() => {
                const prevState = this.state.seconds;
                this.setState({seconds: prevState + 1});
            }, 1000);
        }
        componentWillUnmount()
        {
            clearInterval(this.interval);
        }
        render()
        {
            return (
                <div>
                    Minęło {this.state.seconds} sekund!
                </div>
            );
        }

}

export default Ticker;
