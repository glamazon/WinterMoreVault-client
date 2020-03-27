import React from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends React.Component{
  render() {
    return (<div>
      
      
      
      <body>
  <nav role="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Signup</Link></li>
    </ul>
  </nav>

  <main role="main">
    <header role="banner">
    </header>

    
      
    


    <section>
      <p>Are you a live music junkie who tends to have a huge concert t-shirt collection (as well as other concert merchandise). "WinterMore Valut" solves your problem of how to visually catalog all those t-shirts and other merchandise. You will be able to create a user id and password. You will then be able to create entries for each piece of merchandise. You will be able to upload a picture of your merch, add a date, the artist and any notes you might want to add about the show where the merch was purchased. This will all be presented in a visually appealing Pinterest like cards.</p> 
      
    <p>WinterMore is an ode to Bill Graham the famous concert promoter. In the 60's he created Winterland productions which created the first promotional concert t-shirts. Winterland and the Fillmore were two of the most famous concert venues in the Bay Area (where I am also from) where he produced concerts.</p>   

    </section>
  </main>
  <div id="footer">Made in the belly of the beast in Silicon Valley on matcha and <a href="http://www.sturgillsimpson.com/">Sturgill Simpson</a><i class="fas fa-guitar"></i></div>
</body>


      
      
      
      
      
      </div>);
  }
}

export default LandingPage;