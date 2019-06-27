import React, {Component} from 'react';
import Collapsible from 'react-collapsible';

class Exercise extends Component{



	handleChange = (e) =>{
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let rs = this.props.passedFunction(this.refs.input.value);
		this.refs.output.value = rs;
	}

	render(){
		return(

			<Collapsible trigger = {this.props.questionName}>
			      	<div>
			      		{this.props.DeBai}
			      	</div>
					
					<form onSubmit = {this.handleSubmit} >
				      	<textarea 
				      	ref= "input"
				      	autoComplete='off' 
				      	className="mt-5" 
				      	rows="10" cols="156"
				      	placeholder="Input here" 
				      	onChange = {this.handleChange}
				      	></textarea>
	  					<br/> 
	  					<input className = "process-btn" type = "submit" value = "Process"/>
  					</form>
  						<textarea 
  						ref = "output"
  						autoComplete='off'
  						disabled={true} className="mt-5 text-holder"
  						rows="10" cols="156" 
  						onChange = {this.handleChange}
  						></textarea>
		 	</Collapsible>
		)
	}
}

export default Exercise;