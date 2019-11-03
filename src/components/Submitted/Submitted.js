import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Submitted extends Component {
    render() {
        return (

            <div className="input-container">
               <h3>Thank you!</h3>
                <Link to="/"><button>Leave new feedback</button></Link>
               
            </div>

        );
    }
}

export default Submitted;
