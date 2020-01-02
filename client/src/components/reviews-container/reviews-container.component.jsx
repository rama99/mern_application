import React from 'react';
import {Link , withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchReviewsAsync} from '../../redux/review/review.actions';
import ReviewsList from '../reviews-list/reviews-list.component';
import Spinner from '../spinner/spinner.component';

class ReviewsContainerComponent extends React.Component {


    componentDidMount() {
        this.props.fetchReviewsAsync(this.props.match.params.id);
    }

    render() {

        const {reviews , isFetching }  = this.props;

        console.log(`reviews`);
        console.log(isFetching);

        return (
            <section class="bootcamp mt-5">
			<div class="container">
				<div class="row">
					
					<div class="col-md-8">
						<Link
							to={`/bootcampdetails/${this.props.match.params.id}`}							
							class="btn btn-secondary my-3"
							><i class="fas fa-chevron-left"></i> Bootcamp Info</Link
						>
						<h1 class="mb-4">DevWorks Bootcamp Reviews</h1>						
                        {
                           isFetching ? (<Spinner/>) :  (<ReviewsList reviews={reviews} />)
                        }
					</div>
					
					<div class="col-md-4">
						
						<h1 class="text-center my-4">
							<span
								class="badge badge-secondary badge-success rounded-circle p-3"
								>9</span
							>
							Rating
						</h1>
						
						<a href="add-review.html" class="btn btn-primary btn-block my-3"
							><i class="fas fa-pencil-alt"></i> Review This Bootcamp</a
						>
					</div>
				</div>
			</div>
		</section>
        );
    }

}

const mapStateToProps =  ({reviewState:{reviews , isFetching}}) => ({
    reviews,
    isFetching
})

const mapDispatchToProps = (dispatch) => ({
    fetchReviewsAsync : (bootcampId) => dispatch(fetchReviewsAsync(bootcampId))
})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(ReviewsContainerComponent))