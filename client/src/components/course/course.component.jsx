import React from 'react';

class Course extends React.Component {

    render() {

        const {title , weeks , description , tuition , minimumSkill , scholarshipAvailable} = this.props.course;

        return (
            <div className="card mb-3">
                           <h5 className="card-header bg-primary text-white">{title}</h5>
                           <div className="card-body">
                               <h5 className="card-title">Duration: {weeks} Weeks</h5>
                               <p className="card-text">{description}</p>
                               <ul className="list-group mb-3">
                                   <li className="list-group-item">Cost: ${tuition} USD</li>
                                   <li className="list-group-item">Skill Required: {minimumSkill}</li>
                                   <li className="list-group-item">
                                       Scholarship Available: {scholarshipAvailable ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times text-danger"></i>) } 
                                    </li>
                               </ul>
                           </div>
            </div>
        )
    }

}

export default Course;