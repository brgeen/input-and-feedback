import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Supported extends Component {
    render() {
        return (

            <div>
            <h3>How well are you being supported?</h3>
            <input type="number"></input>
            <Link to="/Comments"><button>Next</button></Link>

        </div>

        );
    }
}

export default Supported;
