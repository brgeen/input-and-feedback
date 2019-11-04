import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Submitted extends Component {
    render() {
        return (

            <div className="input-container">
                <h3>We received your feedback.</h3>
                <h4>Thank you!</h4>
                <Link to="/"><button>C R E A T E - N E W - F E E B A C K</button></Link>

            </div>

        );
    }
}

export default Submitted;
