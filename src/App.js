import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import EventForm from './components/EventForm';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { Route } from 'react-router-dom';
import AppContext from './components/AppContext';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

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



<React.Fragment>

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
					deleteEvent: this.deleteEvent
				}}
			>
				<Route path={'/login'} component={LoginForm} />
				<Route path={'/register'} component={RegistrationForm} />
				<Route path={'/'} exact component={LandingPage} />
				<Route path={'/eventform'} component={EventForm} />
				<Route path={'/dashboard'} component={Dashboard} />
			</AppContext.Provider>

<section>
      <p>Are you a live music junkie who tends to have a huge concert t-shirt collection (as well as other concert merchandise)? "WinterMore Vault" solves your problem of how to visually catalog all those t-shirts and other merchandise. You will be able to create a user id and password. You will then be able to create entries for each piece of merchandise. You will be able to upload a picture of your merch, add a date, the artist, and any notes you might want to add about the show where the merch was purchased. This will all be presented in a visually appealing Pinterest like cards.</p> 
      
		<p>WinterMore is an ode to Bill Graham the famous concert promoter. In the 60's he created Winterland productions which created the first promotional concert t-shirts. Winterland and the Fillmore were two of the most famous concert venues in the Bay Area (where I am also from) where he produced concerts.</p>
		
		<p>To give this a try use the following Demo User and Password</p>

		<p><strong>User Name:</strong> Demo</p>
		<p><strong>Password:</strong>LiveNote5!</p>

    </section>


        </main>
        
      </div>
</React.Fragment>











			
		);
	}
}

export default App;
