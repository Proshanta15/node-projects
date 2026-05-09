
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/add-task.css";

export const Login = () => {
    const [userData, setUserData] = useState();
 
  return (
    <div className="add-task">
      <h1>Login</h1>
      <div className="add-task-card">
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(event) => setUserData({ ...userData, email: event.target.value })}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setUserData({ ...userData, password: event.target.value })}
          />
        </div>
        
        <button className="add-btn" onClick={()=> console.log(userData)}>
         Login
        </button>
        <Link to="/signup" className="login-link">
          Don't have an account? Sign up here.
        </Link>
       
      </div>
    </div>
  );
};
