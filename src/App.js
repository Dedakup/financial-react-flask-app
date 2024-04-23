// app.js
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import './styles/app.sass';

function App() {
  return (
    <Router>
      <Routes>
        {routes}
      </Routes>
    </Router>
  );
}

export default App;
