import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Feeling extends Component {

    state = {
        feeling: '',
    }


    handleInput = (event) => {
        this.setState({
          feeling: event.target.value, 
        })
    }

    handleClick = () => {
        this.props.dispatch({type: "FEELING", payload: this.state.feeling })
    }
    render() {
        return (

            <div>
                <h3>How are you feeling today?</h3>
                <input 
                onChange={(event) => this.handleInput(event)}
                value={this.state.feeling}
                type="number"></input>
                <Link to="/Understanding"><button onClick={this.handleClick}>Next</button></Link>
            <pre>{JSON.stringify(this.state.feeling, null, 2)}</pre>
            </div>

        );
    }
}

export default connect()(Feeling);
