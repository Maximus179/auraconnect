import React, { useEffect, useState } from "react";
import firebaseConfig from "./firebase";
import { MagicSpinner } from "react-spinners-kit";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <MagicSpinner
          size={50}
          marginTop="250px"
          alignItems="center"
          loading={loading}
          color="black"
      />);
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};