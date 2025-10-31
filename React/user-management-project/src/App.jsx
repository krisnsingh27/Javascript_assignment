import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";
import ThemeToggle from "./components/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <Link to="/" className="logo">User Management</Link>
        <ThemeToggle />
      </header>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/user/:id" element={<ViewUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          
        </Routes>
      </>
    </div>
  );
}

