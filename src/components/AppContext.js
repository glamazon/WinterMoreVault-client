import React from 'react';

const AppContext = React.createContext({
  events: [],
  addEvent: () => {},
  getEvents: () => {},
  deleteEvent: () => {},
});
export default AppContext;