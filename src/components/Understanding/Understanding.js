import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {


    state = {
        understanding: '',
    }

    inputHandle = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    clickHandle = () => {
        this.props.dispatch({ type: "UNDERSTANDING", payload: this.state })
    }

    render() {
        return (

            <div>
                <h3>How well are you understanding the content?</h3>
                <input
                    value={this.state.understanding}
                    onChange={(event) => this.inputHandle(event)}
                    type="number">

                </input>
                <Link to="/Supported"><button onClick={() => this.clickHandle()}>Next</button></Link>
                <pre>{JSON.stringify(this.state.understanding, null, 2)}</pre>

            </div>

        );
    }
}

export default connect()(Understanding);
