import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UserList() {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState("");
  // const [roleFilter, setRoleFilter] = useState("");

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) 
   
  );

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {/* <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
          <option value="">All Roles</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select> */}
        <Link to="/add" className="add-btn">Add User</Link>
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No users found.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td><Link to={`/user/${u.id}`}>View Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
