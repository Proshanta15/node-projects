import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const TOKEN_KEY = "authToken";

export const AuthProvider = ({ children }) => {
     
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
    // Function to store token in localStorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem(TOKEN_KEY, serverToken);
  };

  let isLoggedIn = !!token;

  // Logout function to remove token from localStorage
  const LogoutUser = () =>{
    setToken("");
    return localStorage.removeItem(TOKEN_KEY);
  }

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

