import React, { createContext, useReducer, useEffect } from 'react';
import alumniReducer from './AlumniReducer';

export const AlumniContext = createContext();

const initialState = {
  alumniData: [],
  searchQuery: '',
  filteredAlumni: [],
  sortColumn: null,
  sortDirection: 'asc',
  currentPage: 1,
  alumniPerPage: 5,
  notification: '',
};



export const AlumniProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alumniReducer, initialState);

  useEffect(() => {
    fetchAlumniData();
  }, []);

//   const fetchAlumniData = async () => {
//     try {
//       const response = await fetch('/api/alumni'); // Replace with your actual API endpoint
//       const data = await response.json();
//       dispatch({ type: 'SET_ALUMNI_DATA', payload: data });
//     } catch (error) {
//       console.error('Error fetching alumni data:', error);
//     }
//   };
  
  const fetchAlumniData = async () => {
    try {
      // Simulating API call to fetch alumni data
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              json: () =>
                Promise.resolve([
                  {
                    id: 1,
                    name: 'John Doe',
                    graduationYear: 2020,
                    contactInfo: 'john.doe@example.com',
                  },
                  {
                    id: 2,
                    name: 'Jane Smith',
                    graduationYear: 2019,
                    contactInfo: 'jane.smith@example.com',
                  },
                  {
                    id: 3,
                    name: 'Michael Johnson',
                    graduationYear: 2021,
                    contactInfo: 'michael.johnson@example.com',
                  },
                  // Add more alumni data objects as needed
                ]),
            }),
          500
        )
      );

      const data = await response.json();
      dispatch({ type: 'SET_ALUMNI_DATA', payload: data });
    } catch (error) {
      console.error('Error fetching alumni data:', error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });

    const filteredData = state.alumniData.filter((alumni) =>
      alumni.name.toLowerCase().includes(query)
    );
    dispatch({ type: 'SET_FILTERED_ALUMNI', payload: filteredData });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
  };

  const handleSort = (column) => {
    if (column === state.sortColumn) {
      dispatch({ type: 'SET_SORT_DIRECTION', payload: state.sortDirection === 'asc' ? 'desc' : 'asc' });
    } else {
      dispatch({ type: 'SET_SORT_COLUMN', payload: column });
      dispatch({ type: 'SET_SORT_DIRECTION', payload: 'asc' });
    }

    sortAlumniData(column);
  };

  const sortAlumniData = (column) => {
    const sortedData = [...state.filteredAlumni].sort((a, b) => {
      const valueA = column === 'name' ? a[column].toLowerCase() : a[column];
      const valueB = column === 'name' ? b[column].toLowerCase() : b[column];

      if (valueA < valueB) {
        return state.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return state.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    dispatch({ type: 'SET_FILTERED_ALUMNI', payload: sortedData });
  };

  const handlePageChange = (page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const handleNotification = () => {
    // Logic to send notifications to interns (e.g., in-platform, email, or SMS)

    // For demonstration purposes, we'll just update the state with a sample notification message
    dispatch({ type: 'SET_NOTIFICATION', payload: 'New update: Please check your email for important information.' });
  };

  const contextValues = {
    alumniData: state.alumniData,
    searchQuery: state.searchQuery,
    filteredAlumni: state.filteredAlumni,
    sortColumn: state.sortColumn,
    sortDirection: state.sortDirection,
    currentPage: state.currentPage,
    totalPages: Math.ceil(state.filteredAlumni.length / state.alumniPerPage),
    currentAlumni: state.filteredAlumni.slice(
      (state.currentPage - 1) * state.alumniPerPage,
      state.currentPage * state.alumniPerPage
    ),
    notification: state.notification,
    handleSearch,
    handleSort,
    handlePageChange,
    handleNotification,
  };

  return (
    <AlumniContext.Provider value={contextValues}>
      {children}
    </AlumniContext.Provider>
  );
};
