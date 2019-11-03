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

            <div >
                <h3>Review</h3>
                <div>
                    {this.props.feedbackScoreReducer.map(item =>
                        <>
                            <p key={item.feeling}>{item.feeling}</p>
                            <p key={item.understanding}>{item.understanding}</p>
                            <p key={item.supported}>{item.supported}</p>
                            <p key={item.comments}>{item.comments}</p>
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

