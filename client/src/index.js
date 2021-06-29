import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
// import Footer from "./components/Footer";
import DashboardFaculty from "./components/DashboardFaculty";
import DashboardStudent from "./components/DashboardStudent";
const App1 = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard/student" component={DashboardStudent} />
      <Route exact path="/dashboard/faculty" component={DashboardFaculty} />

    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App1 />, document.getElementById("root"));
