import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import MovieDetails from './components/MovieDetails';

function App() {
  
    
  return (
<Router>
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      
    </ul>
  </nav>
  <Routes>
    <Route  path='/' element={<MovieDetails/>}/>
  </Routes>
</Router>
    
  );
}

export default App;
