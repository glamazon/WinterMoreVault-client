import React from 'react';
import cuuid from 'cuuid';
import AppContext from './AppContext'

class EventForm extends React.Component{
  static contextType=AppContext
  onSubmit=(e)=> {
    e.preventDefault()
    const newEvent={
      concert: e.target.concert.value,
      date: e.target.date.value,
      notes: e.target.date.value,
      id: cuuid()
    }
    this.context.addEvent(newEvent)
    this.props.history.push('/dashboard')
  }
  render() {
    return (<div>
      This is the Event Form
      <form onSubmit={this.onSubmit}>
      <input type="text" name="concert"/>
      <input type="date" name="date"/>
      <input type="text" name="notes"/>
      <button>Submit</button>
      </form>
      
      
      
      
      </div>);
  }
}

export default EventForm;