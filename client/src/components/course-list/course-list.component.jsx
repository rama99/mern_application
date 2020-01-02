import React from 'react';
import Course from '../course/course.component';

class CourseList extends React.Component {    

    render() {

        let response;
        
        if(this.props.courses) {
            response = this.props.courses.map(course => (
                            <Course course={course} />
                            ));
        }
        else {
            response = `<h2>No courses</h2>`
        }   
         

        return (
            
            <div>
              {  
                 response                
              }
            </div>
        )
    }
}

export default CourseList