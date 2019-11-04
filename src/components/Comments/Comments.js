import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
                <textarea
                    rows="4"
                    cols="45"
                    type="text"
                    onChange={(event) => this.handleInput(event)}
                    value={this.state.comments}>
                </textarea>
                <Link to="/Review"><button onClick={() => this.handleClick()}>N E X T</button></Link>
            </div>
        );
    }
}

export default connect()(Comments);