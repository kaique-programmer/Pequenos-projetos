import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      {/* <Route path="/sobre" component={} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
