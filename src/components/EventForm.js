import React from 'react';
import cuuid from 'cuuid';
import config from '../config'
import AppContext from './AppContext';
import TokenService from '../services/token-service'
import './EventForm.css';


class EventForm extends React.Component {
	static contextType = AppContext;
	onSubmit = (e) => {
		e.preventDefault();
		const newEvent = {
			concert: e.target.concert.value,
			date: e.target.date.value,
			notes: e.target.notes.value,
			id: cuuid()
		};

		fetch(config.API_ENDPOINT+'/events', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
				'authorization':`Bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify(newEvent)
		})
			.then((res) => res.json())
			.then((data) => {
				this.context.addEvent(data);
				this.props.history.push('/dashboard');
			});
	};
	render() {
		return (
			<div>
				<strong>Event Form</strong>
				<form onSubmit={this.onSubmit}>

				<br></br>

				<label>
				Concert
					<input type="text" name="concert" />
					
					</label>
					<label>
					Date
					<input type="date" name="date" />
					</label>
					<label>
					Notes
					<input type="text" name="notes" />
					</label>
					<br></br>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default EventForm;
