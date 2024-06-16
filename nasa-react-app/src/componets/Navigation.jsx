import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  
  return (
    
    <nav className="nav nav-pills flex-column flex-sm-row">
      <Link className="flex-sm-fill text-sm-center nav-link active" to="/">Home</Link> 
      <Link className="flex-sm-fill text-sm-center nav-link active" to="/astronomy-picture-of-the-day">Daily Or Historical Astronomy-Related Data</Link> 
      <Link className="flex-sm-fill text-sm-center nav-link active" to="/mars-rover-photos">Mars Rover Photos</Link>
    </nav>
  );
};

export default Navigation;
