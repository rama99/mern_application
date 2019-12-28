import React , {Fragment,useEffect}  from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import BootcampList from '../bootcamps-list/bootcamps-list.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = ({bootcampState}) => ({
    isFetching: bootcampState.isFetching
})

// export default connect(mapStateToProps)(WithSpinner(BootcampList));

const BootcampsListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(BootcampList);

export default BootcampsListContainer;