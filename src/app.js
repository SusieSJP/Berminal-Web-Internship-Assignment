import ReactDOM from 'react-dom';
import React from 'react';
import HeaderBg from './components/HeaderBg';
import SnowplusApp from './components/SnowplusApp';
import ConfirmPage from './components/ConfirmPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';

const routes = (
  <BrowserRouter>
    <HeaderBg />
    <div>
      <Switch>
        <Route exact path="/" component={SnowplusApp} />
        <Route path="/emailverified" component={ConfirmPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

let appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);
