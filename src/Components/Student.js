import React from 'react';
import {Link} from 'react-router-dom';

function Student(props){
	//const {name, id, cgpa} = props;
		return(
			<div>
				<ul>
					{/*{<li><Link to={'/Sdetails/'+{props.id}/{props.name}/{props.cgpa}}>{props.name}</Link></li>}*/}
					<li><Link to={'/Sdetails/19-40096-1/Abdullah/3.88'}>{props.name}</Link></li>
				</ul>
				{/*Name:<Link to="">{name}</Link>  <br />
				Id: {id} <br />
				Cgpa: {cgpa}*/}
			</div>

		)
}
 export default Student;