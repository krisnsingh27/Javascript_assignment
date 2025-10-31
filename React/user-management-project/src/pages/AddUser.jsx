import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { UserContext } from "../context/UserContext";

export default function AddUser() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAdd = (user) => {
    dispatch({ type: "ADD_USER", payload: user });

    navigate("/");
  };

  return (
    <div>
      <h1>Add User</h1>
      <UserForm onSubmit={handleAdd} />
    </div>
  );
}
