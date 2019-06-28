import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/header.css';

class Header extends Component {
  render() {
    return (
          <div className = "header" >
              <div>
                  <p className = "font-weight-light welcome">Welcome To Ngôn's CV</p>
              </div>
              <div className="ignout">
                      <p>vexere</p>
                      <Link to="/">Sign out</Link>
              </div>
            </div>
    )
  }
}

export default Header;
