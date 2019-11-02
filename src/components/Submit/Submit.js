import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Submit extends Component {
    render() {
        return (

            <div >
                <header className="App-header">
                    <h1 className="App-title">Submit!</h1>
                </header>
                <Link to="/Review"><button>Next</button></Link>
                <br />
            </div>

        );
    }
}

export default Submit;
