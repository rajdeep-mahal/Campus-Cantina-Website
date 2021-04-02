const initState = () => ({
    searchResults: [],
    noResult: '',
});

const searchReducer = (state = initState(), action) => {
    console.log(action);
    switch(action.type) {
      case 'SEARCH_RESULT_SET':
        return {
          ...state, // Copy old state
          searchResults: action.searchResults, // Input new user name
        };
      case 'NO_RESULT_SET':
        return {
          ...state,
          noResult: action.noResult,
        }
      default:
        // Don't modify state, ignore action
        return state;
    }
  };
  
  export default searchReducer;
