import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import {Link } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


class Toolbar extends Component {

    state = {isLoggedIn: false}

    handleLogOutClick = () => {
      console.log('User is logging out');
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return(
            <div className='Toolbar__logged-in'>
                <button 
                    onClick={this.handleLogOutClick} 
                    
                    className='Nav__link'>
                    Logout
                </button>
            </div>
        )
    }

    renderLoginLink() {
        return(
            <div className='Toolbar__not-logged-in'>
                <Link to='/LoginForm' className='Nav__link'>
                    Login
                </Link>

                <Link to='/Registration Form' className='Nav__link'>
                    Register
                </Link> 
            </div>

        )
    }

    render() {
        return (
            <nav className='Toolbar'>
                
                { TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink() }
            </nav>
        )
    }
}
























const toolbar = props => (
  <header className="toolbar">
  <nav className="toolbar_navigation">
  <div className="toolbar_toggle-button">
  <DrawerToggleButton click={props.drawerClickHandler} />
  </div>
  <div className="toolbar_logo"><a href="/">WinterMore Vault</a></div>
  <div className="spacer" />
  <div className="toolbar_navigation-items">
  <ul>
    <li><a href="/">Home</a></li>
  <li><a href="/Login">Login</a></li>
  <li><a href="/Register">Register</a></li>
    
  </ul>
  </div>
  </nav>
    </header>
);

export default toolbar;