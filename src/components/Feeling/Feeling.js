import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feeling extends Component {
    render() {
        return (

            <div >
                <header className="App-header">
                    <h1 className="App-title">Feeling!</h1>
                </header>
                <Link to="/Understanding"><button>Next</button></Link>
                <br />
            </div>

        );
    }
}

export default Feeling;
