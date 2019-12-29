import React from 'react';
import Login from '../../components/login/login.component';

class LoginPage extends React.Component {
   

    render() {
        return (
            <section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">

					<Login/>
						

						
					</div>
				</div>
			</div>
		</section>

        )
    }

}

export default LoginPage;