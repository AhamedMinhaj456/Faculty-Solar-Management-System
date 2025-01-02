import React, { useState } from "react";
import "./EquipmentTabs.css";


import EquipmentManagement from "./EquipmentManagement";
import EquipmentLogs from "./EquipmentLogs";
import ViewLogs from "./ViewLogs";

const EquipmentTabs = () => {

  const [activeTab, setActiveTab] = useState("equipmentManagement");

  // Dynamically render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "equipmentManagement":
         return <EquipmentManagement />; 
      case "equipmentLogs":
         return <EquipmentLogs/>;
      case "viewLogs":
         return <ViewLogs />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "equipmentManagement" ? "active" : ""}`}
          onClick={() => setActiveTab("equipmentManagement")}
        >
          Equipment Management
        </button>
        <button
          className={`tab ${activeTab === "equipmentLogs" ? "active" : ""}`}
          onClick={() => setActiveTab("equipmentLogs")}
        >
          Equipment Logs
        </button>
        <button
          className={`tab ${activeTab === "viewLogs" ? "active" : ""}`}
          onClick={() => setActiveTab("viewLogs")}
        >
          View Logs
        </button>
      </div>

      {/* Render Content */}
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default EquipmentTabs;
