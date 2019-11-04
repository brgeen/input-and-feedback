import React, { Component } from 'react';
import {connect } from 'react-redux';



class ProgressBar extends Component {
    render() {
        return (
            <div className="progress-container">
               {this.props.feedbackScoreReducer.length === 1 && <div style={{backgroundColor: 'red'}} className="progress-one"></div>}
               {this.props.feedbackScoreReducer.length === 2 && <div style={{backgroundColor: 'red'}} className="progress-one"></div>}
               




            </div>
        );
    }
}
const reduxStatetoProps = (reduxState) => {
    return reduxState
}
export default connect(reduxStatetoProps)(ProgressBar);
