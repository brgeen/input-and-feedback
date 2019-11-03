import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';




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
                        <>
                            <p key={this.props.feedbackScoreReducer}>Feeling: {item.feeling}</p>
                            <p key={this.props.feedbackScoreReducer}>Understanding: {item.understanding}</p>
                            <p key={this.props.feedbackScoreReducer}>Supported: {item.supported}</p>
                            <p key={this.props.feedbackScoreReducer}>Comments: {item.comments}</p>
                        </>
                    )}
                </div>
                <Link to="/Submitted"><button onClick={() => this.clickSubmitHandler()}>Submit</button></Link>

                <pre>{JSON.stringify(this.props.feedbackScoreReducer, null, 2)}</pre>
            </div>

        );
    }
}


const reduxStatetoProps = (reduxState) => {
    return reduxState
}
export default (connect(reduxStatetoProps)(Review));

