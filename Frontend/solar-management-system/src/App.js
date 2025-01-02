import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import EquipmentManagement from "./pages/equipment/EquipmentManagement";
import EquipmentTabs from "./pages/equipment/EquipmentTabs";
import EquipmentLogs from "./pages/equipment/EquipmentLogs";
import ViewLogs from "./pages/equipment/ViewLogs";


// import axios from "axios";

function App() {
  return (
    <div>
      <Router>
        <div>
        <Navbar />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Equipment-Management" element={<EquipmentManagement />} />
          <Route path="/Equipment" element={<EquipmentTabs />} />
          <Route path="/Equipment-Logs" element={<EquipmentTabs />} />
          <Route path="/View-logs" element={<ViewLogs />} /> 
        
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
