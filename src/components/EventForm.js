import React from 'react';
import cuuid from 'cuuid';
import config from '../config'
import AppContext from './AppContext';
import TokenService from '../services/token-service'


class EventForm extends React.Component {
	static contextType = AppContext;
	onSubmit = (e) => {
		e.preventDefault();
		const newEvent = {
			concert: e.target.concert.value,
			date: e.target.date.value,
			notes: e.target.date.value,
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
				This is the Event Form
				<form onSubmit={this.onSubmit}>
					<input type="text" name="concert" />
					<input type="date" name="date" />
					<input type="text" name="notes" />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default EventForm;
