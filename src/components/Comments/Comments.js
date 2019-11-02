import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Comments extends Component {
    render() {
        return (

            <div>
            <h3>Any comments you would like to leave?</h3>
            <input type="text"></input>
            <Link to="/Review"><button>Next</button></Link>

        </div>

        );
    }
}

export default Comments;
