import React from 'react';
import {Link} from 'react-router-dom';

function Topnav(){
	return(
		<div>
			<Link to="/">Home</Link> &nbsp; &nbsp;
			<Link to="/Contact">Contact</Link> &nbsp; &nbsp;
			<Link to="/StudentList">Student List</Link>
		</div>
		
		)
}

export default Topnav;