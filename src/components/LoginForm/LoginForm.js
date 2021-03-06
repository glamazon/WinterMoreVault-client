import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import config from '../../config'
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
	static defaultProps = {
		onLoginSuccess: () => { }
	};

	state = { error: null };

	
handleSubmitBasicAuth = (ev) => {
  ev.preventDefault();
  const { user_name, password } = ev.target;
  const url = config.API_ENDPOINT + '/auth/login';
  const options = {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      user_name: user_name.value,
      password: password.value
    })
  };
  
  

	
	fetch(url, options)
  .then(res => {
  
  if (res.ok) return res.json();
  throw res.json();
})

  .then((res) => {
  user_name.value = '';
  password.value = '';
  TokenService.saveAuthToken(res.authToken);
  this.props.history.push('/dashboard');
  this.props.onLoginSuccess();
})
  .catch(res => {
  

})




};





	render() {
		const { error } = this.state;
		return (
			<>
				<form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
					<div role="alert">{error && <p className="red">{error}</p>}</div>
					<div className="user_name">
						<label htmlFor="LoginForm__user_name">User name</label>
						<Input required name="user_name" id="LoginForm__user_name" />
					</div>
					<div className="password">
						<label htmlFor="LoginForm__password">Password</label>
						<Input required name="password" type="password" id="LoginForm__password" />
					</div>
					<Button type="submit">Login</Button>
				</form>
			</>
		);
	}
}
