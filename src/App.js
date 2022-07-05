import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
