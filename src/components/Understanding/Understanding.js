import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Understanding extends Component {
    render() {
        return (

            <div >
                <header className="App-header">
                    <h1 className="App-title">Understanding!</h1>
                </header>
                <Link to="/Supported"><button>Next</button></Link>
                <br />
            </div>

        );
    }
}

export default Understanding;
