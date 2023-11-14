const initialState = {
    // Define the initial state for reducer2
    data: [],
    loading: false,
    error: null
  };

  const reducer2 = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export default reducer2;
