import React, { useState, useContext } from 'react';
import Login from '../../components/Auth/Login';
const Auth=({ defaultRoutine = 'login' })=>{

    const [routine, setRoutine] = useState(defaultRoutine);
    const displayRoutine = () => {
       
    
        switch (routine) {
          case 'signup':
            return <SignUp />;
        
          default:
            return <Login />;
        }
      };
return (



    {displayRoutine()}

);

};

export default Auth;