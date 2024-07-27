import react from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events";

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/event-list" element={<Events />}/>

      </Routes>
    </div>
  );
}

export default App;
