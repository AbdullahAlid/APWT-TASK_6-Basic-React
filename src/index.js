import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Topnav from './Components/Topnav';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import StudentList from './Components/StudentList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sdetails from './Components/Sdetails';

ReactDOM.render(
  <React.StrictMode>
  		
  		<Router>
  		<Topnav />
  			<Switch>
  				<Route exact path="/">
  					<Home />
  				</Route>
  				<Route exact path="/Contact">
  					<Contact />
  				</Route>
				  <Route exact path="/Sdetails/:id/:name/:cgpa">
  					<Sdetails />
  				</Route>
  				
				<Route exact path="/StudentList">
  					<StudentList />
  				</Route>
  			</Switch>
  			<Footer />
  		</Router>
        
        
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
