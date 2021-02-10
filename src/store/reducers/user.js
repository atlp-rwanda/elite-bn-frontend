const users = (state = {}, action) => {
    switch (action.type) {
       case 'LOGGEDIN':
        return action.payload;
      default:
        return state;
    }
  };
  export default users;