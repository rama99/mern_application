import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {logout} from '../../redux/auth/auth.actions';

class Header extends React.Component {

	onLogout = () => {		
		this.props.logout();
		this.props.history.push(`/`);	
	}
    
    render() {

		const {user} = this.props;

		const links  = user ?  (
				<Fragment>
					<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
							>
								<i className="fas fa-user"></i> Account
							</a>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="manage-bootcamp.html"
									>Manage Bootcamp</a
								>
								<a className="dropdown-item" href="manage-reviews.html"
									>Manage Reviews</a
								>
								<a className="dropdown-item" href="manage-account.html"
									>Manage Account</a
								>
								<div className="dropdown-divider"></div>
								<Link className="dropdown-item" onClick={this.onLogout}
									><i className="fas fa-sign-out-alt"></i> Logout
								</Link>
							</div>
						</li>
						<li className="nav-item d-none d-sm-block">
							<a className="nav-link" href="#">|</a>
						</li>
				</Fragment>
			): (
				<li className="nav-item">							
							<Link className="nav-link" to="/login">Login</Link>
				</li>
			);

        return (
          
		<nav className="navbar navbar-expand-md navbar-dark bg-primary">
			<div className="container">
				
				<Link to="/" className="navbar-brand"><i className="fas fa-laptop-code"></i> DevCamper</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
					
						{links}					


						<li className="nav-item">							
							<Link className="nav-link" to="/bootcamps">Browse Bootcamps</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
        )
    }

}

const mapStateToProps = ({authState:{user}}) => ({
	user
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));