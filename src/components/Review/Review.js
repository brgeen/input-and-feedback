import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Review extends Component {
    render() {
        return (

            <div >
               <h3>Review</h3>
                <Link to="/Submitted"><button>Submit</button></Link>
             
            </div>

        );
    }
}

export default Review;
