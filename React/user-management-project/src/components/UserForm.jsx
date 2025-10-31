import React, { useState, useRef, useEffect } from "react";

export default function UserForm({ onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const roleRef = useRef();

  useEffect(() => {
    if (initialData) {
      roleRef.current.value = initialData.role;
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: initialData?.id || Date.now(),
      name,
      email,
      role: roleRef.current.value,
    };
    onSubmit(newUser);
    setName("");
    setEmail("");
    roleRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <label>Role:</label>
      <select ref={roleRef} defaultValue="Role">
        {/* <option value="" disabled>Select Role</option> */}
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>

      <button type="submit">{initialData ? "Update User" : "Add User"}</button>
    </form>
  );
}
