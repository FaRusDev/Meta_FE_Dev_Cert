import React from 'react'
import './task2.css'

import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const Task2 = () => {

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState({ 
      value: "", 
      isTouched: false, 
    }); 
    const [role, setRole] = useState("role"); 
   
    const getIsFormValid = () => { 
      return ( 
        firstName && 
        validateEmail(email) && 
        password.value.length >= 8 && 
        role !== "role" 
      ); 
    }; 
  
    const clearForm = () => { 
        setFirstName(""); 
        setLastName(""); 
        setEmail(""); 
        setPassword({ 
          value: "", 
          isTouched: false, 
        }); 
        setRole("role"); 
       }; 
  
    const handleSubmit = (e) => {
        e.preventDefault();
      alert("Account created!");
      clearForm();
    };
  
  return (
    <div className="task2"> 
    <form onSubmit={handleSubmit}> 
      <fieldset> 
        <h2>Sign Up</h2> 
        <div className="Field"> 
          <label> 
            First name <sup>*</sup> 
          </label>
           {/*change here onChange to get value  */}
          <input 
            value={firstName} 
            onChange={(e) => { 
              setFirstName(e.target.value); 
            }} 
            placeholder="First name" 
          /> 
        </div> 
        <div className="Field"> 
          <label>Last name</label> 
          {/*change here onChange to get value  */}
          <input 
            value={lastName} 
            onChange={(e) => { 
              setLastName(e.target.value); 
            }} 
            placeholder="Last name" 
          /> 
        </div> 
        <div className="Field"> 
          <label> 
            Email address <sup>*</sup> 
          </label> 
          {/*change here onChange to get value  */}
          <input 
            value={email} 
            onChange={(e) => { 
              setEmail(e.target.value); 
            }} 
            placeholder="Email address" 
          /> 
        </div> 
        <div className="Field"> 
          <label> 
            Password <sup>*</sup> 
          </label> 
          {/*change here onChange to get value  */}
          <input 
            value={password.value} 
            type="password" 
            onChange={(e) => { 
              setPassword({ ...password, value: e.target.value }); 
            }} 
            // to make blur password when not touched
            onBlur={() => { 
              setPassword({ ...password, isTouched: true }); 
            }} 
            placeholder="Password" 
          />

          {password.isTouched && password.value.length < 8 ? ( 
            <PasswordErrorMessage /> 
          ) : null} 
        </div> 
        <div className="Field"> 
          <label> 
            Role <sup>*</sup> 
          </label> 
          <select value={role} onChange={(e) => setRole(e.target.value)}> 
            <option value="role">Role</option> 
            <option value="individual">Individual</option> 
            <option value="business">Business</option> 
          </select> 
        </div> 
        <button type="submit" disabled={!getIsFormValid()}> 
          Create account 
        </button> 
      </fieldset> 
    </form> 
  </div> 
); 
}

export default Task2