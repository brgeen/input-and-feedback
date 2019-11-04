import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Supported extends Component {

    state = {
        supported: '',
    }

    handleInput = (event) => {
        console.log(event.target.value);

        const validateNums = event.target.value > 0 && event.target.value < 6;
        const validateEmptyField = event.target.value === '';


        if (validateNums || validateEmptyField) {
            this.setState({
                supported: event.target.value,
            })
        }
    }

    handleClick = () => {
        this.props.dispatch({ type: "SUPPORTED", payload: this.state })
    }

    render() {
        return (

            <div className="input-container">
                <h3>How well are you being supported?</h3>
                <input
                    type="text"
                    value={this.state.supported}
                    onChange={(event) => this.handleInput(event)}>
                </input>
                {this.state.supported.length === 0 && <h5>Please enter a number 1 through 5</h5>}
                {this.state.supported.length > 0 && <Link to="/Comments"><button onClick={this.handleClick}>NEXT</button></Link>}
            </div>

        );
    }
}

export default connect()(Supported);
