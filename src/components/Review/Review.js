import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Review extends Component {
    render() {
        return (

            <div >
                <header className="App-header">
                    <h1 className="App-title">Review!</h1>
                </header>
                <Link to="/"><button>Next</button></Link>
                <br />
            </div>

        );
    }
}

export default Review;
