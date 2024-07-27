import react from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import { ProfileDetails } from "./pages/ProfileDetails";
import TrainerRegistrationForm from "./pages/TrainerRegistrationForm";
import AdminDashboard from "./pages/AdminDashboard";
import CreateEvent from "./pages/CreateEvent";

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/event-list" element={<Events />}/>
        <Route path="/profile-details" element={<ProfileDetails />}/>
        <Route path="/trainerregistration" element={<TrainerRegistrationForm/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/createevent" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
