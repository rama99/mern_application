import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loginStart} from '../../redux/auth/auth.actions';

class Login extends React.Component {

    constructor(props) {
		super(props);
		
		this.state = {
			email:null,
			password:null
		}
	}
	
	componentDidMount() {

		const {user , history} = this.props;

		/*if(user){
			history.push(`/`);
		}*/
	}
	
	handleChange = (event) => {
        const { name , value } = event.target;
        this.setState({[name] : value});        
	}
	
	loginClick = (event) => {
		console.log(`loginClick`);
		event.preventDefault();
		console.log(this.state);
		this.props.loginStart(this.state);
		this.setState({email:``,password:``});
		//this.props.history.push(`/`);
	}

    render() {
        return (
            <div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Login</h1>
								<p>
									Log in to list your bootcamp or rate, review and favorite
									bootcamps
								</p>
								<form onSubmit={(e) => this.loginClick(e)}>
									<div className="form-group">
										<label for="email">Email Address</label>
										<input
											type="email"
											name="email"
											className="form-control"
											placeholder="Enter email"
											value={this.state.email}
											onChange={(e) => this.handleChange(e)}
											required
										/>
									</div>
									<div className="form-group mb-4">
										<label for="password">Password</label>
										<input
											type="password"
											name="password"
											className="form-control"
											placeholder="Enter password"
											value={this.state.password}
											onChange={(e) => this.handleChange(e)}
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="submit"
											value="Login"											
											className="btn btn-primary btn-block"
										/>
									</div>
								</form>
								<p>	Forgot Password? <a href="reset-password.html">Reset Password</a></p>
							</div>
						</div>
        )
    }
    
}

const mapStateToProps = ({authState:{user}}) => ({
	user
})

const mapDispatchToProps = dispatch => ({
	loginStart: (data) => dispatch(loginStart(data))
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))