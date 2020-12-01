import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import EventsPage from "./Pages/EventsPage.js";
import reportWebVitals from "./reportWebVitals";
import { icons } from "./assets/icons";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
React.icons = icons;

const Root = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(App)} />
          <Route exact path="/after" component={withRouter(Home)} />
          <Route exact path="/events" component={withRouter(EventsPage)} />

          <Route component={Error}></Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
