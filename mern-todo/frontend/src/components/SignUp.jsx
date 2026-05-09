
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/add-task.css";

export const SignUp = () => {
    const [userData, setUserData] = useState();
 
  return (
    <div className="add-task">
      <h1>Sign Up</h1>
      <div className="add-task-card">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(event) => setUserData({ ...userData, name: event.target.value })}
          />
        </div>
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
         Sign Up
        </button>
        <Link to="/login" className="login-link">
          Already have an account? Login here.
        </Link>
       
      </div>
    </div>
  );
};
