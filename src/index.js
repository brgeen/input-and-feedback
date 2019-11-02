import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackScoreReducer = (state = [], action) => {
    if (action.type === "FEELING") {
        return [action.payload]
    }

    if (action.type === "UNDERSTANDING") {
        return [...state, action.payload]
    }

    if (action.type === "SUPPORTED") {
        return [...state, action.payload]
    }

    if (action.type === "COMMENTS") {
        return [...state, action.payload]
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feedbackScoreReducer,
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
