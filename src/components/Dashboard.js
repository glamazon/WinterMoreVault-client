import React from 'react';
import AppContext from './AppContext'
import Card from './Card'
import {Link} from 'react-router-dom'

class Dashboard extends React.Component{
  static contextType=AppContext
  render() {
    console.log(this.context.events)
    return (<div>
      <h1>Dashboard</h1>
      <Link to='/eventform'>Add a New Event</Link>
      {this.context.events.map(event => (
        <Card concert={event.concert}
         date={event.date}
         id={event.id}
        notes={event.notes}/>
      ))}
      </div>);
  }
}

export default Dashboard;