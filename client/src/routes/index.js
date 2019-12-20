import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../components/common/history';
import Home from '../components/Home';

import Login from '../components/Login';
import App from '../components/App';
import WarningView from '../components/common/WarningView'
const Error404 = () => <WarningView.Error40X errCode={404} errMsg={'你访问的界面不见了'}/>;

class Homes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/app" component={App}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    );
  }
}

export default Homes;