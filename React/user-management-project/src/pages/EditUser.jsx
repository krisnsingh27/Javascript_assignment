import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { UserContext } from "../context/UserContext";

export default function EditUser() {
  const { id } = useParams();
  const { users, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const user = users.find(u => u.id.toString() === id);

  const handleUpdate = (updatedUser) => {
    dispatch({ type: "UPDATE_USER", payload: updatedUser });
    navigate("/");
  };

  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm onSubmit={handleUpdate} initialData={user} />
    </div>
  );
}
