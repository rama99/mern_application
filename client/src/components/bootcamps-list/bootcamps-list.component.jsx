import React , {Fragment} from 'react';
import {withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchBootcampsAsync} from '../../redux/bootcamp/bootcamp.actions';
import Bootcamp from '../bootcamp/bootcamp.component';
import Pagination from '../pagination/pagination.component';

export class BootcampsList extends React.Component {

    componentDidMount() {
        this.props.fetchBootcampsAsync();
    }

    render(){
        const {bootcamps} = this.props;        

        return (
            <Fragment>
               
                   {
                      bootcamps.map(bootcamp => <Bootcamp data={bootcamp} />) 
                   }                    
                    
                   <Pagination/>
              { /* </div> */}
            </Fragment>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    fetchBootcampsAsync: () => dispatch(fetchBootcampsAsync())
})

const mapStateToProps = ({bootcamp}) => ({
  bootcamps: bootcamp.bootcamps
})

export default  withRouter(connect(mapStateToProps , mapDispatchToProps)(BootcampsList));