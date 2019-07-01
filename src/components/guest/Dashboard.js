import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../layout/Header';

class Dashboard extends Component{
  render(){
    return(
       <div>
          <Header name="guest"/>
          <h1/>

          <p> Because you are guest, there are only limited number of features that you can access. Please sign in to see more ! </p>

          <ol>
            <li> <Link name = "ahihi" to="/CV">CV page</Link></li>
            <li><Link to="/JSguest">JavaScript exercise page</Link></li>
          </ol>
       </div>
    )
  }
}

export default Dashboard;
