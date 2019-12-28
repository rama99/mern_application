import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({isFetching, ...otherProps}) => {

    console.log(`FETCHING`);

    console.log(isFetching);
    
    return isFetching ? (
        <Spinner/>
    )
    : (
        <WrappedComponent {...otherProps} />
      );

}

export default WithSpinner;