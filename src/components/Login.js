
import React,{Component} from 'react';
import  { Redirect } from 'react-router-dom';
import '../styles/main.css';

class Home extends Component{
	constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            success: false,
        }

    }

  	handleInputChange(property) {
		  return e => {
		    this.setState({
		      [property]: e.target.value
		    });
		  };
		}


  	requestToServer = (name, password) => {
  		var {username, password} = this.state;
  		if (username === "vexere" && password === "vxr2019"){
  			this.setState({success : true});
  		}
  	}



	render(){
		var {success} = this.state;
	    return success ? <Redirect from='/' to='/CV'/> :(
	    	<div className="container-fluid px-0 home body-home">
	    		<section className="container-fluid">
					<section className="row justify-content-center"> 
						<section className="col-12 col-sm-6 col-md-3">
							<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsFZNGZtDNmkVJtr6b0i5AsPIim7hx_G14P7ssN6g7XRDLz8Z" 
							className="bg"/>

							<form className="form-container">
								<div className="inner-addon left-addon form-group need-margin">
									<i className="fa fa-user" aria-hidden="true"></i>
									<input 
									value={this.state.username} 
									onChange = {this.handleInputChange('username')} 
									className="form-control" 
									type="text"  id="username" name="username" required placeholder="Username"/>
								</div>

								<div className="left-addon inner-addon form-group">
									<i className="fa fa-key" aria-hidden="true"></i>
									<input 
									value={this.state.password}
									onChange = {this.handleInputChange('password')} 
									className="form-control" 
									type="password" id= "password" name="password" required placeholder="*********"/>
								</div>

								<input type="button" value="LOGIN" className="button btn btn-primary btn-block"
								onClick = {this.requestToServer(this.state.username,this.state.password)} />
								
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
