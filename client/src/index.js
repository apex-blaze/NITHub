import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import register from "./components/Register"
// import Footer from "./components/Footer";
import dashboard from "./components/Dashboard"
const App1 = () => (
  <BrowserRouter>
    <Switch>      
      <Route path="/" exact component={App} />
      <Route exact path="/register" component={register}/>
      <Route exact path="/dashboard" component={dashboard} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App1 />, document.getElementById("root"));