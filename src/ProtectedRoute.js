import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Context from './context';
const jwt    = require('jsonwebtoken')
const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { state } = useContext(Context);
	const [cookies,removeCookie] = useCookies(['user']);
  var check='y'
  if(cookies.user&&jwt.verify(cookies.user.role,"placexp@123").role!="A"){
    check='n'
  }
  

  return (
    <Route
      render={props =>
        check=='n' ? <Redirect to="/auth" /> : <Component {...props} />
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
