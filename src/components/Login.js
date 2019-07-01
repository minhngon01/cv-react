
import React,{Component} from 'react';
import  { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../styles/main.css';
import axios from 'axios';


class Login extends Component{
	constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
						success: false,

        };
				this.handleInputChange = this.handleInputChange.bind(this);
    }

		handleInputChange (e) {
    	this.setState({ [e.target.name]: e.target.value });
  	}

  	requestToServer = async (name, password) => {
  		var {username, password} = this.state;
			if( username.length === 0 || password.length === 0 ){
	      return ;
	    }
  		if (username === "vexere" && password === "vxr2019"){
				axios.post('https://uat-api.vexere.net/v1/oauth/token', {
					grant_type: 'client_credentials',
					client_id: '5babac18-7774-4c00-837e-ce0be24f1ce0',
					client_secret: '7bc97196-280c-4595-83fd-3da8a0d7d190'
			})
				.then(res => {
					var {data} = res;

					if (data.token_type && data.access_token && data.refresh_token && data.expires_in ){
						this.setState({success : true});
					}
					else if (data.error){
						alert("Cannot sign in");
					}
		    })
  		}
	  }



	render(){
			var {username, success} = this.state;
	    return success ? <Redirect name = {"ahihi"} from='/' to='/CV'/> : (
				<body>
	    		<section className="container-fluid body-home">
						<section className="row justify-content-center form">
								<form onSubmit = {this.requestToServer(this.state.username,this.state.password)}  className="form-container">

										<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsFZNGZtDNmkVJtr6b0i5AsPIim7hx_G14P7ssN6g7XRDLz8Z"
										className="bg"/>
										<div className="inner-addon left-addon form-group need-margin">
											<i className="fa fa-user" aria-hidden="true"></i>
											<input
											value={this.state.username}
											onChange = {this.handleInputChange}
											className="form-control"
											type="text"  id="username" name="username" required placeholder="Username"/>
										</div>

									<div className="left-addon inner-addon form-group">
										<i className="fa fa-key" aria-hidden="true"></i>
										<input
										value={this.state.password}
										onChange = {this.handleInputChange}
										className="form-control"
										type="password" id= "password" name="password" required placeholder="*********"/>
									</div>

									<input type="submit" value="LOGIN" className="button btn btn-primary btn-block"/>

									<p style = {{ textAlign: 'center', marginTop: '15px', color: 'white' }}> OR </p>

									<Link className = "button btn btn-primary btn-block" to="/Dashboard">LOGIN AS GUEST</Link>

									<div className=" form-group form-check">
				          	<div className="left">
												<label>
									      		 <input type="checkbox" className="form-check-input" checked="no"/>Remember me
										    </label>
										</div>

										<div className="right">
											<a href="#" style={{color:'black'}}><i>Forgot Password?</i></a>
										</div>
									</div>
								</form>
						</section>
				</section>
				</body>

	    )
  	}
}
export default Login;
