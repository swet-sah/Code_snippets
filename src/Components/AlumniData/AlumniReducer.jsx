const alumniReducer = (state, action) => {
    switch (action.type) {
      case 'SET_ALUMNI_DATA':
        return {
          ...state,
          alumniData: action.payload,
          filteredAlumni: action.payload,
        };
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
      case 'SET_FILTERED_ALUMNI':
        return {
          ...state,
          filteredAlumni: action.payload,
        };
      case 'SET_SORT_COLUMN':
        return {
          ...state,
          sortColumn: action.payload,
        };
      case 'SET_SORT_DIRECTION':
        return {
          ...state,
          sortDirection: action.payload,
        };
      case 'SET_CURRENT_PAGE':
        return {
          ...state,
          currentPage: action.payload,
        };
      case 'SET_NOTIFICATION':
        return {
          ...state,
          notification: action.payload,
        };
      default:
        return state;
    }
  };
export default alumniReducer