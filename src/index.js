import React ,{Suspense,useContext, useReducer}from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from "./serviceWorker";
//import reportWebVitals from './reportWebVitals';
import Context from './context';
import reducer from './reducer';
import 'jquery';
import 'popper.js';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/js/bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
  withRouter,
} from "react-router-dom";

const Auth = React.lazy(() => import('./Pages/Auth'));
const Home = React.lazy(() => import('./Pages/Home'));
const Events = React.lazy(() => import('./Pages/Events'));
const Root = () => {
  const initialState = useContext(Context);
  const [State, dispatch] = useReducer(reducer, initialState);
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
      <Context.Provider value={{ State, dispatch }}>
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route path="/auth" component={withRouter(Auth)} />
          <Route path="/events" component={withRouter(Events)} />
          <Route
              path="/logout"
              render={rProps => <Auth {...rProps} defaultRoutine="logout" />}
            />

          <Route component={Error}></Route>
        </Switch>
        </Context.Provider>
      </Router>
    </Suspense>
  );
};

ReactDOM.render(
  
    <Root />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
serviceWorker.register();