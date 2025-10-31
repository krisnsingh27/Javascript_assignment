import React, { useReducer, useEffect } from "react";
import { UserContext } from "./UserContext";

const initialState = [];

function userReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter(u => u.id !== action.payload);
    case "UPDATE_USER":
      return state.map(u => u.id === action.payload.id ? action.payload : u);
    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [users, dispatch] = useReducer(userReducer, initialState);

 
  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      dispatch({ type: "LOAD", payload: JSON.parse(stored) });
      console.log("Users loaded from storage");
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Users updated");
    return () => console.log("Cleanup triggered");
  }, [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
