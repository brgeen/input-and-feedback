import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Comments extends Component {

    state = {
        comments: '',
    }

    handleInput = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: "COMMENTS", payload: this.state })
    }

    render() {
        return (

            <div className="input-container">
                <h3>Any comments you would like to leave?</h3>
                <input
                    type="text"
                    onChange={(event) => this.handleInput(event)}
                    value={this.state.comments}>
                </input>
                <Link to="/Review"><button onClick={() => this.handleClick()}>Next</button></Link>
                <pre>{JSON.stringify(this.state.comments, null, 2)}</pre>
            </div>

        );
    }
}

export default connect()(Comments);
