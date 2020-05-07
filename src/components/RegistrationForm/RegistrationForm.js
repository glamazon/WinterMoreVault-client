import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import config from '../../config';
import './RegistrationForm.css'




export default class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {}
	};

	state = { error: null };

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { full_name, nick_name, user_name, password } = ev.target;
		fetch(config.API_ENDPOINT+'/users', {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
      body: JSON.stringify({ 
        full_name: full_name.value,
        user_name: user_name.value,
        password: password.value })
		}).then((res) => {
			full_name.value = '';
			user_name.value = '';
			password.value = '';
			this.props.onRegistrationSuccess();
		});

		console.log('registration form submitted');
		console.log({ full_name, user_name, password });
	};

	render() {
		const { error } = this.state;
		return (
			<form className="RegistrationForm" onSubmit={this.handleSubmit}>
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="full_name">
					<label htmlFor="RegistrationForm__full_name">
						Full name <Required />
					</label>
					<Input name="full_name" type="text" required id="RegistrationForm__full_name" />
				</div>
				<div className="user_name">
					<label htmlFor="RegistrationForm__user_name">
						User name <Required />
					</label>
					<Input name="user_name" type="text" required id="RegistrationForm__user_name" />
				</div>
				<div className="password">
					<label htmlFor="RegistrationForm__password">
						Password <Required />
					</label>
					<Input name="password" type="password" required id="RegistrationForm__password" />
				</div>
				
				<Button type="submit">Register</Button>
			</form>
		);
	}
}

