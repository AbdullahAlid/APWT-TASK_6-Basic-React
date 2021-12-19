import React from 'react';
import {Link} from 'react-router-dom';
import Student from './Student';

function StudentList(){
        return(
			<div>
				<Student name="Abdullah" id="19-40096-1" cgpa="3.88" />
                <Student name="Hridoy" id="19-40101-1" cgpa="9.99" />
                <Student name="Efty" id="19-40036-1" cgpa="8.88" />
				{/*Name:<Link to="">{name}</Link>  <br />
				Id: {id} <br />
				Cgpa: {cgpa}*/}
			</div>

		)
}
 export default StudentList;