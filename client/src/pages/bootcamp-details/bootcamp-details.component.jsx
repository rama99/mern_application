import React from 'react';
import { withRouter } from 'react-router-dom';
import BootcampDetails from '../../components/bootcamp-details/bootcamp-details.component';

class BootcampDetailsPage extends React.Component {


render() {
    console.log(`PROPS`);
    console.log(this.props);
    return (
    <section className="bootcamp mt-5">
	   <BootcampDetails/>
    </section>   
    )
}

}

export default withRouter(BootcampDetailsPage);