import React , {Fragment} from 'react';
import {withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchBootcampsAsync} from '../../redux/bootcamp/bootcamp.actions';
import Bootcamp from '../bootcamp/bootcamp.component';
import Pagination from '../pagination/pagination.component';
import Spinner from '../spinner/spinner.component';

export class BootcampsList extends React.Component {
    

    componentDidMount() {

        const {fetchBootcampsAsync} = this.props;
        
        console.log(`COMPONENT DID MOUNT`);
        fetchBootcampsAsync();
    }

    render(){
        const {bootcamps, isFetching , pagination, count} = this.props;        

    return  isFetching ?  (
        <Spinner/>
    ):  
    
    (
        <Fragment>
        {                    
                       bootcamps.map(bootcamp => <Bootcamp key={bootcamp._id} data={bootcamp} />)
        } 
        <Pagination pagination={pagination} />                   
        </Fragment> 
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    fetchBootcampsAsync: () => dispatch(fetchBootcampsAsync())
})

const mapStateToProps = ({bootcampState}) => ({
  bootcamps: bootcampState.bootcamps,
  isFetching: bootcampState.isFetching,
  pagination: bootcampState.pagination,
  count: bootcampState.count
})

export default  withRouter(connect(mapStateToProps , mapDispatchToProps)(BootcampsList));