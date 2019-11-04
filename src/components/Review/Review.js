import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import ReviewItem from '../ReviewItem/ReviewItem';

class Review extends Component {

    clickSubmitHandler = () => {
        console.log('clicked');

        axios.post('/feedback', {
            ...this.props.feedbackScoreReducer
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="input-container" >
                <h3>Review</h3>
                <div>
                    {this.props.feedbackScoreReducer.map(item => 
                        <ReviewItem item={item} />
                    )}
                </div>
                <Link to="/Submitted"><button onClick={() => this.clickSubmitHandler()}>SUBMIT</button></Link>
            </div>
        );
    }
}

const reduxStatetoProps = (reduxState) => {
    return reduxState
}
export default (connect(reduxStatetoProps)(Review));

