import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import EventForm from './components/EventForm';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AppContext from './components/AppContext';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Card from './components/Card'

class App extends React.Component {
	state = {
		sideDrawerOpen: false,
		events:[]
	};
	addEvent = (event) => {
		this.setState({
			events: this.state.events.concat(event)
		});
	};

setEvents = (events) => {
		this.setState({
			events
		});
	};





	getEvents = () => {};
	deleteEvent = (id) => {
		this.setState({
			events: this.state.events.filter((event) => event.id !== id)
		});
	};






	drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    











	
		return (





      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
        {backdrop}
				<main style={{marginTop: '64px'}}>
				



          <AppContext.Provider
				value={{
					events: this.state.events,
					addEvent: this.addEvent,
					getEvents: this.getEvents,
					setEvents: this.setEvents,
					deleteEvent: this.deleteEvent
				}}
			>
			<Switch>
			
			<Route path={'/login'} component={LoginForm} />
				<Route path={'/register'} component={RegistrationForm} />
				<Route path={'/'} exact component={LandingPage} />
				<Route path={'/eventform'} component={EventForm} />
				<Route path={'/dashboard'} component={Dashboard} />
				</Switch>
			</AppContext.Provider>




        </main>
        
      </div>
			
			
				












			
		);
	}
}

export default App;
