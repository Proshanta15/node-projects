import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const TOKEN_KEY = "authToken";

export const AuthProvider = ({ children }) => {
     
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));

  const [user, setUser] = useState("");

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
  // Authentication context provider to get the user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
         const data = await response.json();
         setUser(data.userData);
         console.log("User data:", data.userData);
      } else {
        console.error("Failed to authenticate user");
      }
     
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    userAuthentication();
  }, []);


  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user }}>
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

