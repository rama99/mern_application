import React , {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchBootcampsByFilterAsync} from '../../redux/bootcamp/bootcamp.actions';

class BootcampFilter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            career:null,
            rating:null,
            budget:null
        }
    }

    handleChange = (event) => {
        const { name , value } = event.target;
        this.setState({[name] : value});        
    }

    getBootcampsByFilter = (event) => {
        console.log(`getBootcampsByFilter`);
        event.preventDefault();        
    }

    render() {
        return (
            <Fragment>
            <h4>Filter</h4>
                    <form onSubmit={(e) => this.getBootcampsByFilter(e)}>
                       <div className="form-group">
                            <label> Career</label>
                            <select name="career" className="custom-select mb-2">
                                <option value="any" selected>Any</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile Development">Mobile Development</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div> 

                        <div className="form-group">
                            <label> Rating</label>
                            <select name="rating" className="custom-select mb-2">
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
                            <select name="budget"  className="custom-select mb-2">
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
            </Fragment>        
        );
    }

}

const mapDispatchToProps = dispatch => ({
    fetchBootcampsByFilterAsync: dispatch(fetchBootcampsByFilterAsync)
})

export default connect(null , mapDispatchToProps)(BootcampFilter);