import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Submitted from '../Submitted/Submitted';
import Review from '../Review/Review';
// import ProgressBar from '../ProgressBar/ProgressBar' // i started to create a progress bar at the top, ran out of time

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Input & Feedback</h1>
          </header>
          {/* <ProgressBar/> */}
          <Route path="/" exact component={Feeling} />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Supported" component={Supported} />
          <Route path="/Comments" component={Comments} />
          <Route path="/Submitted" component={Submitted} />
          <Route path="/Review" component={Review} />
        </div>
      </Router>
    );
  }
}

export default App;