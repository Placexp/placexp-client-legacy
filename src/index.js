import React ,{Suspense,useContext, useEffect, useReducer}from 'react';
import { useCookies } from 'react-cookie';
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
const Contact = React.lazy(() => import('./Pages/Contact'));
const Doubt = React.lazy(() => import('./Pages/Doubt'));
const Doubtsp = React.lazy(() => import('./Pages/Doubtsp'));
const Eventsp = React.lazy(() => import('./Pages/Eventsp'));
const CreateEvent = React.lazy(() => import('./Pages/CreateEvent'));
const ApproveEvent = React.lazy(() => import('./Pages/ApproveEvent'));
const SignupC = React.lazy(() => import('./Pages/SignupC'));
const Profile = React.lazy(() => import('./Pages/Profile'));
const Interview = React.lazy(() => import('./Pages/Interview'));
const Interviewsp = React.lazy(() => import('./Pages/Interviewsp'));
const Policy = React.lazy(() => import('./Pages/Policy'));
const Interviewct = React.lazy(() => import('./Pages/Interviewct'));
const InterviewApprove = React.lazy(() => import('./Pages/InterviewApprove'));
const Interviewed = React.lazy(() => import('./Pages/Interviewed'));
const Hackathon = React.lazy(() => import('./Pages/Hackathon'));
const Hackathonct = React.lazy(() => import('./Pages/Hackathonct'));
const Mockinterview = React.lazy(() => import('./Pages/Mockinterview'));
const Mockinterviewct = React.lazy(() => import('./Pages/Mockinterviewct'));
const Root = () => {
  const initialState = useContext(Context);
  const [State, dispatch] = useReducer(reducer, initialState);
  const [cookies, setCookie] = useCookies(['user']);  
  useEffect(async() => {
    try{    
    if(cookies.user.role)
  {
  dispatch({type:"LOGIN_USER", payload: [] })
  }
}
catch(err)
{
  console.log(err);}
 }, []);
  
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
      <Context.Provider value={{ State, dispatch }}>
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route path="/auth" component={withRouter(Auth)} />
          <Route path="/policy" component={withRouter(Policy)} />
          <Route path="/events" component={withRouter(Events)} />
          <Route path="/contact" component={withRouter(Contact)} />
          <Route path="/doubt" component={withRouter(Doubt)} />
          <Route path="/query/:id" component={withRouter(Doubtsp)} />
          <Route path="/event/new" component={withRouter(CreateEvent)} />
          <Route path="/details/:id" component={withRouter(Eventsp)} />
          <Route path="/verify" component={withRouter(ApproveEvent)} />
          <Route path="/profile" component={withRouter(Profile)} />
          <Route path="/signup/club/:id" component={withRouter(SignupC)} />
         
          <ProtectedRoute path="/interview_create" component={withRouter(Interviewct)} />
          <Route path="/interview/:id" component={withRouter(Interviewsp)} />
          <ProtectedRoute path="/interview_edit/:id" component={withRouter(Interviewed)} />
          <Route path="/interview" component={withRouter(Interview)} />
          <ProtectedRoute path="/verifyinterview" component={withRouter(InterviewApprove)} />
                                                             
          <Route path="/hackathon" component={withRouter(Hackathon)} />
          <Route path="/hackathon_create" component={withRouter(Hackathonct)} />
                                                     
          <Route path="/mockinterview" component={withRouter(Mockinterview)} />
          <ProtectedRoute path="/mockinterview_create" component={withRouter(Mockinterviewct)} />
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
