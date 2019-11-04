import React, { Component } from 'react';

class ReviewItem extends Component {

    getObjectKey = (object) => { // this function gets the key of each object so that it can be used to access each value
        return Object.keys(object);
    }

    getObjectKeyToRender = (object) => { // this function gets the key to display as the heading and capitalizes the first char
        let key = Object.keys(object).toString();
        return key[0].toUpperCase() + key.slice(1, key.length);
    }

    render() {
        return (
            <>

            {this.getObjectKeyToRender(this.props.item) === 'Comments' ? // ternary for conditionally rendering inline or block responses
            <h4>{this.getObjectKeyToRender(this.props.item)}: <br/> {this.props.item[this.getObjectKey(this.props.item)]}</h4> : // this renders a block format for the comments heading
            <h4>{this.getObjectKeyToRender(this.props.item)}: {this.props.item[this.getObjectKey(this.props.item)]}</h4> }
            
                
            </>
        );
    }
}
export default ReviewItem;

