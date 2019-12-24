import React , {Fragment} from 'react';

import Bootcamp from '../bootcamp/bootcamp.component';

export class BootcampsList extends React.Component {

    render(){

        return (
            <Fragment>
               { /*<div className="col-md-8">*/ }
                   <Bootcamp/>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="img/image_1.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="bootcamp.html"
                                            >Devworks Bootcamp
                                            <span className="float-right badge badge-success"
                                                >8.8</span
                                            ></a
                                        >
                                    </h5>
                                    <span className="badge badge-dark mb-2">Boston, MA</span>
                                    <p className="card-text">
                                        Web Development, UI/UX, Mobile Development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="img/image_2.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="bootcamp.html"
                                            >ModernTech Bootcamp
                                            <span className="float-right badge badge-success"
                                                >7.5</span
                                            ></a
                                        >
                                    </h5>
                                    <span className="badge badge-dark mb-2">Boston, MA</span>
                                    <p className="card-text">
                                        Web Development, UI/UX, Mobile Development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="img/image_3.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="bootcamp.html"
                                            >Codemasters
                                            <span className="float-right badge badge-success"
                                                >9.2</span
                                            ></a
                                        >
                                    </h5>
                                    <span className="badge badge-dark mb-2">Burlington, VT</span>
                                    <p className="card-text">
                                        Web Development, Data Science, Marketing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="img/image_4.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="bootcamp.html"
                                            >DevCentral Bootcamp
                                            <span className="float-right badge badge-success"
                                                >6.4</span
                                            ></a
                                        >
                                    </h5>
                                    <span className="badge badge-dark mb-2">Kingston, RI</span>
                                    <p className="card-text">
                                        Web Development, UI/UX, Mobile Development, Marketing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
              { /* </div> */}
            </Fragment>
        );
    }

}

export default BootcampsList;