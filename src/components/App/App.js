import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Submitted from '../Submitted/Submitted';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
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
