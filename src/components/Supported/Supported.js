import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Supported extends Component {

    state = {
        supported: '',
    }

    inputHandle = (event) => {
        this.setState({
            supported: event.target.value
        })
    }

    buttonClick = () => {
        this.props.dispatch({ type: "SUPPORTED", payload: this.state })
    }

    render() {
        return (

            <div className="input-container">
                <h3>How well are you being supported?</h3>
                <input
                    type="number"
                    value={this.state.supported}
                    onChange={(event) => this.inputHandle(event)}>
                </input>
                <Link to="/Comments"><button onClick={() => this.buttonClick()}>Next</button></Link>
                <pre>{JSON.stringify(this.state.supported, null, 2)}</pre>
            </div>

        );
    }
}

export default connect()(Supported);
