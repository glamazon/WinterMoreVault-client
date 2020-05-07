import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/login">Login</a></li>
  <li><a href="/Register">Register</a></li>
  </ul>
</nav>);
};
export default sideDrawer;