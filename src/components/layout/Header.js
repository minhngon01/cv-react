import React, {Component} from 'react';
import '../../styles/header.css';

class Header extends Component {
  render() {
    return (
          <div className = "header" >
              <div>
                  <p className = "font-weight-light welcome">Welcome To Ngôn's CV</p>
              </div>

              <div className="signout">
                      <p>{this.props.name}</p>
                      <p> {this.props.link} </  p>
              </div>
          </div>
    )
  }
}

export default Header;
