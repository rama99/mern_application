import React from 'react';

import BootcampsContainer from '../../components/bootcamps-container/bootcamps-container';
import BootcampsList from '../../components/bootcamps-list/bootcamps-list.component';
import BootcampsByLocation from '../../components/bootcamps-by-location/bootcamps-by-location.component';
import BootcampFilter from '../../components/bootcamp-filter/bootcamp-filter.component';


class BootcampsPage extends React.Component {

    
    render() {

    return   (<section className="browse my-5">
        <div className="container">
            <div className="row">  

                <div className="col-md-4">
                    <BootcampsByLocation/>                    
                    <BootcampFilter/>                    
                </div>

                <div className="col-md-8">
                    {<BootcampsList/>}
                    {/* <BootcampsContainer/> */}
                </div>

            </div>
        </div>
    </section>)

    }


}


export default BootcampsPage;