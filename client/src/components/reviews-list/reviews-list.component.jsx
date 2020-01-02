import React from 'react';
import Review from '../review/review.component';

class ReviewList extends React.Component {

    render() {

        const reviews = this.props.reviews;

        return (

            <div>
                {
                    reviews.map(review => <Review review={review} />
                    )
                }
            </div>       

        )

    }
}

export default ReviewList;