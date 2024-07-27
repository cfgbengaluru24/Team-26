import react from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import { ProfileDetails } from "./pages/ProfileDetails";

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/event-list" element={<Events />}/>
        <Route path="/profile-details" element={<ProfileDetails />}/>

      </Routes>
    </div>
  );
}

export default App;
