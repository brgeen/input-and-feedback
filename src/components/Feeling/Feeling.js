import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Feeling extends Component {

    state = {
        feeling: '',
    }

    handleInput = (event) => {
        console.log(event.target.value);

        const validateNums = event.target.value > 0 && event.target.value < 6;
        const validateEmptyField = event.target.value === '';


        if (validateNums || validateEmptyField) {
            this.setState({
                feeling: event.target.value,
            })
        }
    }

    handleClick = () => {
        this.props.dispatch({ type: "FEELING", payload: this.state })
    }
    render() {
        return (

            <div className="input-container">
                <h3>How are you feeling today?</h3>
                <input
                    onChange={(event) => this.handleInput(event)}
                    value={this.state.feeling}
                    type="number"></input>

                <Link to="/Understanding"><button onClick={this.handleClick}>Next</button></Link>

                {this.state.feeling.length === 0 && <h5>Please enter a number 1 through 5</h5>}
                <pre>{JSON.stringify(this.state.feeling, null, 2)}</pre>
            </div>

        );
    }
}

export default connect()(Feeling);
