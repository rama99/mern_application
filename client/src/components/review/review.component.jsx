import React from 'react';


class Review extends React.Component {
    

    render() {
        const {title , text , rating , user:{name}} = this.props.review;
        return (
            <div class="card mb-3">
							<h5 class="card-header bg-dark text-white">{title}</h5>
							<div class="card-body">
								<h5 class="card-title">
									Rating: <span class="text-success">{rating}</span>
								</h5>
								<p class="card-text">
									{text}
								</p>
								<p class="text-muted">Writtern By {name}</p>
							</div>
			</div>
        )
    }


}
export default Review