import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Submitted extends Component {
    render() {
        return (

            <div className="input-container">
                <h3>We have received your feedback.</h3>
                <h4>Thank you!</h4>
                <Link to="/"><button>Leave new feedback</button></Link>

            </div>

        );
    }
}

export default Submitted;
