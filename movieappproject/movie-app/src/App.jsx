import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/MovieSearch'
import Login from './pages/LoginPage'; 
import Signup from './pages/SignupPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import Navbar from './components/Navbar';
import MovieSearch from './pages/MovieSearch';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import Footer from './pages/Footer';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
         
          <Routes>
             
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />

              <Route element={<ProtectedRoute />}>
              <Route path="/movie" element={<MovieSearch />} />
              
              
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <Footer/>
        </Router>


        

    </div>
  )
}

export default App

