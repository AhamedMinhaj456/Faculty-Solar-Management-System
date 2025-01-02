import React, { useState } from "react";
import "./EquipmentLogs.css";

const EquipmentLogs = () => {
  const [logs, setLogs] = useState([
    { equipment: "", startDate: "", endDate: "", hours: 0, quantity: 1 },
  ]);

  const handleInputChange = (index, field, value) => {
    const newLogs = [...logs];
    newLogs[index][field] = value;
    setLogs(newLogs);
  };

  const addNewEntry = () => {
    setLogs([
      ...logs,
      { equipment: "", startDate: "", endDate: "", hours: 0, quantity: 1 },
    ]);
  };

  const removeEntry = (index) => {
    const newLogs = logs.filter((_, i) => i !== index);
    setLogs(newLogs);
  };

  const submitLogs = () => {
    console.log("Submitted Logs:", logs);
    alert("Logs submitted s uccessfully!");
  };

  return (
    <div className="container">
      <h2>Add Equipment Logs for Floor 1</h2>
      <label>Select Floor</label>
      <select className="dropdown">
        <option value="Floor 1">Floor 1</option>
        <option value="Floor 2">Floor 2</option>
      </select>

      <div className="logs-table">
        {logs.map((log, index) => (
          <div key={index} className="log-entry">
            <select
              className="dropdown"
              value={log.equipment}
              onChange={(e) =>
                handleInputChange(index, "equipment", e.target.value)
              }
            >
              <option value="">Select Equipment</option>
              <option value="Server A">Server A</option>
              <option value="Bulb">Bulb</option>
              <option value="SMART BOARD">SMART BOARD</option>
              <option value="Computer">Computer</option>
            </select>
            <input
              type="date"
              value={log.startDate}
              onChange={(e) =>
                handleInputChange(index, "startDate", e.target.value)
              }
            />
            <input
              type="date"
              value={log.endDate}
              onChange={(e) =>
                handleInputChange(index, "endDate", e.target.value)
              }
            />
            <input
              type="number"
              value={log.hours}
              min="0"
              onChange={(e) => handleInputChange(index, "hours", e.target.value)}
            />
            <input
              type="number"
              value={log.quantity}
              min="1"
              onChange={(e) =>
                handleInputChange(index, "quantity", e.target.value)
              }
            />
            <button
              className="remove-button"
              onClick={() => removeEntry(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button className="add-button" onClick={addNewEntry}>
        Add New Entry
      </button>
      <button className="submit-button" onClick={submitLogs}>
        Submit All Logs
      </button>
    </div>
  );
};

export default EquipmentLogs;
