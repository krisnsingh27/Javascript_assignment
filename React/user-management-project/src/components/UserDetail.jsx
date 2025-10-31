import React, { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UserDetail() {
  const { id } = useParams();
  const { users, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const user = users.find(u => u.id.toString() === id);

  if (!user) return <p>User not found.</p>;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch({ type: "DELETE_USER", payload: user.id });
      navigate("/");
    }
  };

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <div className="actions">
        <Link to={`/edit/${user.id}`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
