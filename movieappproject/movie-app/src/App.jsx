import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/MovieSearch'
import Login from './pages/LoginPage'; 
import Signup from './pages/SignupPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import Navbar from './components/Navbar';
import MovieSearch from './pages/MovieSearch';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
         
          <Routes>
             
             
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
              <Route element={<ProtectedRoute />}>
              <Route path="/movie" element={<MovieSearch />} />
              
            </Route>
          </Routes>
        </Router>
        

    </div>
  )
}

export default App

