import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feeling extends Component {
    render() {
        return (

            <div>
                <h3>How are you feeling today?</h3>
                <input type="number"></input>
                <Link to="/Understanding"><button>Next</button></Link>

            </div>

        );
    }
}

export default Feeling;
