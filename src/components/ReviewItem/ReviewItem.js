import React, { Component } from 'react';

class ReviewItem extends Component {

    getObjectKey = (object) => {
        return Object.keys(object);
    }

    getObjectKeyToRender = (object) => {
        let key = Object.keys(object).toString();
        return key[0].toUpperCase() + key.slice(1, key.length);
    }

    render() {
        return (
            <>
                <h5>{this.getObjectKeyToRender(this.props.item)}</h5>
                <p>{this.props.item[this.getObjectKey(this.props.item)]}</p>
            </>
        );
    }
}
export default ReviewItem;

