import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainerRegistrationForm from './pages/TrainerRegistrationForm';
import AdminDashboard from './pages/AdminDashboard';
import CreateEvent from './pages/CreateEvent';


const App = () => (
  <Router>
    <Routes>
      <Route path="/trainerregistration" element={<TrainerRegistrationForm />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/createevent" element={<CreateEvent />} />
      
    </Routes>
  </Router>
);

export default App;
