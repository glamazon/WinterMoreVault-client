import React from 'react';
import AppContext from './AppContext'
import TokenService from '../services/token-service'
class Card extends React.Component{
  static contextType = AppContext
  delete=()=>{
    fetch('http://localhost:8000/api/events/'+this.props.id, {
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
    return (<div>
      <h2>{this.props.concert}</h2>
      <span>{this.props.date}</span>
      <p>{this.props.notes}</p>
      <button onClick={(e) => this.delete()}>Delete</button>
      </div>);
  }
}

export default Card;