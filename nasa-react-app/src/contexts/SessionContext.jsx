
import React, { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext();

//SessionProvider component
export const SessionProvider = ({ children }) => {
  //useState hook
  const [sessionData, setSessionData] = useState(() => {
    //get the session data from local storage
    const savedData = localStorage.getItem('sessionData');
    //if there is a saved data return it
    return savedData ? JSON.parse(savedData) : {
      date: new Date().toISOString().split('T')[0],
      rover: 'curiosity',
      camera: '',
      page: 1,
    };
  });

  //useEffect hook
  useEffect(() => {
    //store the session data in local storage
    localStorage.setItem('sessionData', JSON.stringify(sessionData));
  }, [sessionData]);

  return (
    /*SessionContext.Provider component*/
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

//useSession hook
export const useSession = () => useContext(SessionContext);
