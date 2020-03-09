import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import EventForm from './components/EventForm';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { Route } from 'react-router-dom';
import AppContext from './components/AppContext';

class App extends React.Component {
	state = {
		events: []
	};
	addEvent = (event) => {
		this.setState({
			events: this.state.events.concat(event)
		});
	};
	getEvents = () => {};
	deleteEvent = (id) => {
		this.setState({
			events: this.state.events.filter((event) => event.id !== id)
		});
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					events: this.state.events,
					addEvent: this.addEvent,
					getEvents: this.getEvents,
					deleteEvent: this.deleteEvent
				}}
			>
				<Route path={'/login'} component={LoginForm} />
				<Route path={'/register'} component={RegistrationForm} />
				<Route path={'/'} exact component={LandingPage} />
				<Route path={'/eventform'} component={EventForm} />
				<Route path={'/dashboard'} component={Dashboard} />
			</AppContext.Provider>
		);
	}
}

export default App;
