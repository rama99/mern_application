import React from 'react';
import {connect} from 'react-redux';
import { Link , withRouter} from 'react-router-dom';

import { fetchCurrentBootcampAsync } from '../../redux/bootcamp/bootcamp.actions';
import CourseList from '../course-list/course-list.component';

class BootcampDetails extends React.Component {

    componentDidMount(){

      //console.log( this.props.match.params.id);
      this.props.fetchCurrentBootcampAsync(this.props.match.params.id);
    }

    render() {

    const {currentBootcamp: {name , description , averageCost , averageRating ,  courses , photo , housing , jobAssistance , jobGuarantee , acceptGi , website },match} = this.props;
    
            
     return   (
        <div className="container">
        <div className="row">
                   
          <div className="col-md-8">
              <h1>{name}</h1>                       
              <p>{description}</p>                   
              <p className="lead mb-4">Average Course Cost: <span className="text-primary">${averageCost}</span></p>                   
              <CourseList courses={courses} />
          </div>
                    
          <div className="col-md-4">
                       
              <img src={`/uploads/${photo}`} className="img-thumbnail" alt=""/>                        
              <h1 className="text-center my-4"><span className="badge badge-secondary badge-success rounded-circle p-3">{averageRating}</span> Rating</h1>                       
              <Link to={`/reviews/${match.params.id}`} className="btn btn-dark btn-block my-3"><i className="fas fa-comments"></i>  Read Reviews</Link>
              <a href="add-review.html" className="btn btn-light btn-block my-3"><i className="fas fa-pencil-alt"></i>  Write a Review</a>
              <a href={website} target="_blank" className="btn btn-secondary btn-block my-3"><i className="fas fa-globe"></i>  Visit Website</a>
                        
   {/* <div id='map' style='width: 100%; height: 300px;'></div>*/ }
                       
            <ul className="list-group list-group-flush" className="mt-4">
              <li className="list-group-item">
                  {housing ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times text-danger"></i>)}  Housing                
              </li>
              <li className="list-group-item">
                  {jobAssistance ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times text-danger"></i>)} Job Assistance
              </li>
              <li className="list-group-item">
                  {jobGuarantee ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times text-danger"></i>)} Job Guarantee 
              </li> 
              <li className="list-group-item">
                  {acceptGi ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times text-danger"></i>)} Accepts GI Bill
              </li>
             </ul>
          </div>
        </div>
      </div>
    )
}

}

const mapStateToProps = ({bootcampState:{currentBootcamp}}) => {   
   return ({
    currentBootcamp
})
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentBootcampAsync: (bootcampId) => dispatch(fetchCurrentBootcampAsync(bootcampId))
})


export default withRouter(connect(mapStateToProps , mapDispatchToProps)(BootcampDetails));