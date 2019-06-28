
import React,{Component} from 'react';
import  { Redirect } from 'react-router-dom';
import '../styles/main.css';
import axios from 'axios';

class Home extends Component{
	constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
						success: ""
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
					var {data} = res
					var result = {
						"token_type": "bearer",
						"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOjIsInVzciI6InZpZXR0ZWxwYXlfYXBpIiwiY2lkIjoiNWJhYmFjMTgtNzc3NC00YzAwLTgzN2UtY2UwYmUyNGYxY2UwIiwiZXhwIjoxNTYxNjkyMTEwfQ.pt0yJfrOeiW-otQIMq2a4-DWnu6wR0gTA64DK5kK7D8",
						"refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZiI6MSwidHlwIjoyLCJ1c3IiOiJ2aWV0dGVscGF5X2FwaSIsImNpZCI6IjViYWJhYzE4LTc3NzQtNGMwMC04MzdlLWNlMGJlMjRmMWNlMCIsImV4cCI6MTU2MjI5MzMxMH0.U_VAU5O-L4I55JMFiWc__BtJYPX6BUcTF6OBWRmXOjU",
						"expires_in": 3600
					}

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
			var {success} = this.state;
	    return success ? <Redirect from='/' to='/CV'/> : (
	    	<div className="container-fluid px-0 home body-home">
	    		<section className="container-fluid">
					<section className="row justify-content-center">
						<section className="col-12 col-sm-6 col-md-3">
							<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsFZNGZtDNmkVJtr6b0i5AsPIim7hx_G14P7ssN6g7XRDLz8Z"
							className="bg"/>

							<form onSubmit = {this.requestToServer(this.state.username,this.state.password)} className="form-container">
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

								<input type="submit" value="LOGIN" className="button btn btn-primary btn-block"
								 />

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
				</section>
	    	</div>
	    )
  	}
}
export default Home;
