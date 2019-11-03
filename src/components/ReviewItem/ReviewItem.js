import React, { Component } from 'react';




class ReviewItem extends Component {

    render() {
        return (

            <>
                {/* <p key={}>Feeling: {item.feeling}</p>
                <p key={}>Understanding: {item.understanding}</p>
                <p key={}>Supported: {item.supported}</p>
                <p key={}>Comments: {item.comments}</p> */}
                {JSON.stringify(this.props.item, null, 2)}
            </>

        );
    }
}
export default ReviewItem;

