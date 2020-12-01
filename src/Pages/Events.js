import React ,{useContext} from "react";
import Event from "../Component/Event/Event";
import Context from '../context';

import { Link, Redirect } from 'react-router-dom';
const Events = () => {
  
    const { State, dispatch } = useContext(Context);
    if (!State.isAuth) {
        return <Redirect to="/" />;
        }
  return (
    <div>
      <Event />
    </div>
  );
};

export default Events;