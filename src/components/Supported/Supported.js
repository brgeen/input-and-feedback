import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Supported extends Component {
    render() {
        return (

            <div >
                <header className="App-header">
                    <h1 className="App-title">Supported!</h1>
                </header>
                <Link to="/Comments"><button>Next</button></Link>
                <br />
            </div>

        );
    }
}

export default Supported;
