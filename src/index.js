import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  
  withRouter,
} from "react-router-dom";

const Auth = React.lazy(() => import('./Pages/Auth'));
const Root = () => {
 
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(App)} />
          <Route path="/auth" component={withRouter(Auth)} />

         

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
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();