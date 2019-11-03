import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {


    state = {
        understanding: '',
    }

    handleInput = (event) => {
        console.log(event.target.value);

        const validateNums = event.target.value > 0 && event.target.value < 6;
        const validateEmptyField = event.target.value === '';


        if (validateNums || validateEmptyField) {
            this.setState({
                understanding: event.target.value,
            })
        }
    }

    handleClick = () => {
        this.props.dispatch({ type: "UNDERSTANDING", payload: this.state })
    }

    render() {
        return (

            <div className="input-container">
                <h3>How well are you understanding the content?</h3>
                <input
                    value={this.state.understanding}
                    onChange={(event) => this.handleInput(event)}
                    type="text">

                </input>
                {this.state.understanding.length === 0 && <h5>Please enter a number 1 through 5</h5>}
                {this.state.understanding.length > 0 && <Link to="/Supported"><button onClick={this.handleClick}>Next</button></Link>}

            </div>

        );
    }
}

export default connect()(Understanding);
