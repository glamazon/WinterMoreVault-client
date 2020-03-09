import React from 'react';
import AppContext from './AppContext'

class Card extends React.Component{
  static contextType = AppContext
  render() {
    return (<div>
      <h2>{this.props.concert}</h2>
      <span>{this.props.date}</span>
      <p>{this.props.notes}</p>
      <button onClick={(e) => this.context.deleteEvent(this.props.id)}>Delete</button>
      </div>);
  }
}

export default Card;