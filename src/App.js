import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*  
  style     
*/


/*
  external library
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './components/Login';
import CV from './components/CV';
import JS from './components/JS';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/CV" component={CV}/>
                <Route path="/JS" component={JS}/>
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
