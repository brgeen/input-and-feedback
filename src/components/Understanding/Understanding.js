import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Understanding extends Component {
    render() {
        return (

            <div>
            <h3>How well are you understanding the content?</h3>
            <input type="number"></input>
            <Link to="/Supported"><button>Next</button></Link>

        </div>

        );
    }
}

export default Understanding;
