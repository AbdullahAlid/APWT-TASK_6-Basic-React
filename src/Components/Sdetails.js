import React from 'react';
import {useParams} from 'react-router-dom';
function Sdetails(){
	const {id,name,cgpa} =useParams();
	const courses = [
		{id:1, name:"IPL"},
		{id:2, name:"DS"},
		{id:3, name:"Algorithms" }
	]
	return(
		<div>
			<h1>This is Student details</h1>
			<ul>
				{/*{courses.map((c)=><li>{c.id},{c.name}</li>)}*/}
				<li>Name: {name}</li>
				<li>Name: {id}</li>
				<li>Name: {cgpa}</li>
			</ul>

		</div>
		)
	}


export default Sdetails;