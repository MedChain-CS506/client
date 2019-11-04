import React, { createContext, useReducer } from 'react';
import PatientReducer from './PatientReducer';
import {
  SEARCH_PATIENTS,
  GET_PATIENT,
  GET_RECORDS,
  CLEAR_PATIENTS,
  SET_LOADING,
} from '../types';

export const PatientContext = createContext();

const PatientContextProvider = props => {
  const initialState = {
    patients: [],
    patient: {},
    records: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(PatientReducer, initialState);

  const searchPatients = async text => {
    setLoading();

    const response = await ...//! from some url

    dispatch({
      type: SEARCH_PATIENTS,
      payload: response...
    })
  };

  const getPatient = async aadhar => {
    setLoading();

    const response = await ... //! from some url

    dispatch({
      type: GET_PATIENT,
      payload: response ...
    })
  }

  const getPatientRecords = () => {
    setLoading();

    const response = await ...

    dispatch({
      type: GET_RECORDS,
      payload: response ...
    })
  }

  const clearPatients = () => dispatch({ type: CLEAR_PATIENTS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  // ! THIS SHOULD BE WHERE WE FETCH INFORMATION FROM THE BLOCKCHAIN
  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
  //     .then(response => response.json())
  //     .then(parsedJSON =>
  //       parsedJSON.results.map(user => ({
  //         name: `${user.name.first} ${user.name.last}`,
  //       }))
  //     )
  //     .then(contacts => setPatients(contacts))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <PatientContext.Provider value={patients, patient, records, loading, searchPatients, clearPatients, getPatient, getPatientRecords}>
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientContextProvider;
