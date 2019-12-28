import React from 'react';
import {connect} from 'react-redux';
import {fetchBootcampsByLocationAsync} from '../../redux/bootcamp/bootcamp.actions';

class BootcampsByLocation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            zipcode:0,
            distance:0
        }        
    }

    handleChange = (event) => {
        const { name , value } = event.target;
        this.setState({[name] : value});        
    }

    getBootcampsByLocation = (event) => {
        event.preventDefault();        
        this.props.fetchBootcampsByLocationAsync(this.state);
        console.log(`GET BOOTCAMPS BY LOCATION`);
    }

    render() {
        return (
            <div className="card card-body mb-4">
                        <h4 className="mb-3">By Location</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="distance"
                                            placeholder="Miles From"
                                            value={this.state.distance}
                                            onChange={(e) => this.handleChange(e)}
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
                                            value={this.state.zipcode}
                                            onChange={(e) => this.handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <input
                                type="submit"
                                value="Find Bootcamps"
                                className="btn btn-primary btn-block"
                                onClick={this.getBootcampsByLocation}
                            />
                        </form>
                    </div>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    fetchBootcampsByLocationAsync: (query) => dispatch(fetchBootcampsByLocationAsync(query))
})

export default connect(mapStateToProps , mapDispatchToProps)(BootcampsByLocation)