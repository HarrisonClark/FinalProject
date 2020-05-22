import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from '../firebase';
const UidContext = createContext();
export default UidContext;

export function UidProvider({ children }) {
  const [uid, setUid] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setUid(user.uid);
      } else {
        setAuthenticated(false);
        setUid(null);
      }
    });
  }, []);

  return (
    <UidContext.Provider value={{ uid, authenticated }}>
      {children}
    </UidContext.Provider>
  );
}

export const useUidContext = () => useContext(UidContext);
