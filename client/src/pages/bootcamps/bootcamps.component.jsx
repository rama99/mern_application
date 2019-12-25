import React from 'react';
import { connect } from 'react-redux';

import Bootcamp from '../../components/bootcamp/bootcamp.component';
import BootcampsList from '../../components/bootcamps-list/bootcamps-list.component';
import BootcampsByLocation from '../../components/bootcamps-by-location/bootcamps-by-location.component';
import BootcampFilter from '../../components/bootcamp-filter/bootcamp-filter.component';

import {fetchBootcampsAsync} from '../../redux/bootcamp/bootcamp.actions';

class BootcampsPage extends React.Component {

    componentDidMount() {
        this.props.fetchBootcampsAsync();
    }

    render() {

    return   (<section className="browse my-5">
        <div className="container">
            <div className="row">               
                <div className="col-md-4">
                    <BootcampsByLocation/>
                    <div className="card card-body mb-4">
                        <h4 className="mb-3">By Location</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="miles"
                                            placeholder="Miles From"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="zipcode"
                                            placeholder="Enter Zipcode"
                                        />
                                    </div>
                                </div>
                            </div>
                            <input
                                type="submit"
                                value="Find Bootcamps"
                                className="btn btn-primary btn-block"
                            />
                        </form>
                    </div>
                    <BootcampFilter/>
                    <h4>Filter</h4>
                    <form>
                       /* <div className="form-group">
                            <label> Career</label>
                            <select className="custom-select mb-2">
                                <option value="any" selected>Any</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile Development">Mobile Development</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div> */

                        <div className="form-group">
                            <label> Rating</label>
                            <select className="custom-select mb-2">
                                <option value="any" selected>Any</option>
                                <option value="9">9+</option>
                                <option value="8">8+</option>
                                <option value="7">7+</option>
                                <option value="6">6+</option>
                                <option value="5">5+</option>
                                <option value="4">4+</option>
                                <option value="3">3+</option>
                                <option value="2">2+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label> Budget</label>
                            <select className="custom-select mb-2">
                                <option value="any" selected>Any</option>
                                <option value="20000">$20,000</option>
                                <option value="15000">$15,000</option>
                                <option value="10000">$10,000</option>
                                <option value="8000">$8,000</option>
                                <option value="6000">$6,000</option>
                                <option value="4000">$4,000</option>
                                <option value="2000">$2,000</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Find Bootcamps"
                            className="btn btn-primary btn-block"
                        />
                    </form>
                </div>
                
                


                <div className="col-md-8">                  
                    
                <BootcampsList/>
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
                </div>
            </div>
        </div>
    </section>)

    }


}

const mapDispatchToProps = (dispatch) => ({    
    fetchBootcampsAsync: () => dispatch(fetchBootcampsAsync())
})


export default connect(null,mapDispatchToProps)(BootcampsPage);