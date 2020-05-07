import React from 'react';
import AppContext from './AppContext'
import config from '../config'
import TokenService from '../services/token-service'
class Card extends React.Component{
  static contextType = AppContext
  delete=()=>{
    fetch(config.API_ENDPOINT+'/events/'+this.props.id, {
			method: 'delete',
			headers: {
				'content-type': 'application/json',
				'authorization':`Bearer ${TokenService.getAuthToken()}`
			},
		})
			.then((res) => {
        this.context.deleteEvent(this.props.id)
				
			});
  }
  render() {
    const date = new Date(this.props.date)
    return (<div>
      <h2>{this.props.artist}</h2>
      <span>{date.toLocaleDateString()}</span>
      <p>{this.props.notes}</p>
      <button onClick={(e) => this.delete()}>Delete</button>
      </div>);
  }
}

export default Card;