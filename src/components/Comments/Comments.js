import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Comments extends Component {
    render() {
        return (

            <div >
                <header className="App-header">
                    <h1 className="App-title">Comments!</h1>
                </header>
                <Link to="/Submit"><button>Next</button></Link>
                <br />
            </div>

        );
    }
}

export default Comments;
