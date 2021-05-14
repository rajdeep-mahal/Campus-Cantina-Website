const initState = () => ({
  appUser: ''
});

const appUserReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'APPUSER_SET':
      return {
        ...state, // Copy old state
        appUser: action.appUser, // Input new user name
      };
    default:
      // Don't modify state, ignore action
      return state;
  }
};

export default appUserReducer;