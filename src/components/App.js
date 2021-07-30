import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import Entrepreneurship from '../components/Entreprenuership/Entreprenuership';
import './App.css';

const App=()=>{
  return (
	<BrowserRouter>
		<Switch>
			<div className="App">
				<Route exact path="/" component={Landing}/>
				<Route path="/projects" component={Projects}/>
				<Route path="/entrepreneurship" component={Entrepreneurship}/>
			</div>
		</Switch> 
	</BrowserRouter>
  );
}

export default App;
