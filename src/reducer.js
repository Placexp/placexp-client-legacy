export default function reducer(State, { type, payload }) {
    switch (type) {
      case 'LOGIN_USER':
        return {
          ...State,
          currentUser: payload,
          isAuth: true
        };
  
      case 'LOGOUT_USER':
        return {
          ...State,
          currentUser: null,
          isAuth: false
        };
  
      case 'IS_LOGGED_IN':
        return {
          ...State,
          isAuth: payload
        };
  
      default:
        return State;
    }
  }
  