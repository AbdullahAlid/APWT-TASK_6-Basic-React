import React, {Component} from 'react';

class Contact extends Component{
	constructor(){
		super();
		this.state = {
			message: 'Contact Page'
		}
	}
	ChangeMessage(){
		this.setState({message:'Welcome to contact page '});
	}
	render() {
		return(
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={()=>this.ChangeMessage()}>Click..</button>
			</div>
				
			)
	}
}


export default Contact;