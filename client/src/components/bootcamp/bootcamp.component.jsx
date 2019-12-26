import React from 'react';
import {Link} from 'react-router-dom';

class Bootcamp extends React.Component {   

    render() {

        const {_id , name , averageRating , careers, photo , location: {city , state}} =  this.props.data;
        

        return (
            <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={`/uploads/photo_5d713a66ec8f2b88b8f830b8.jpeg`} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to={`./bootcampdetails/${_id}`}>
                                            {name}
                                            <span className="float-right badge badge-success"
                                                >{averageRating}</span>
                                        </Link>                                        
                                    </h5>
                                    <span className="badge badge-dark mb-2">{city},{state}</span>
                                    <p className="card-text">
                                     {careers.toString()} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Bootcamp;