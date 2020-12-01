import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Context from './context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { state } = useContext(Context);
	const [cookies] = useCookies(['user']);
  if(cookies.user){
    state.isAuth=true;
  }
  else{
    state.isAuth=false;
  }

  return (
    <Route
      render={props =>
        !state.isAuth ? <Redirect to="/auth" /> : <Component {...props} />
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
