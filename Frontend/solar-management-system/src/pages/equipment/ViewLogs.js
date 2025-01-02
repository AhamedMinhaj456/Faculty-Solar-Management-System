import React, { useState } from "react";
import "./ViewLogs.css";

const ViewLogs = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [logs, setLogs] = useState([
    {
      equipmentName: "Computer",
      startDate: "2024-11-01",
      endDate: "2024-11-30",
      operationalHours: 400,
      quantity: 10,
      timestamp: "2024-11-27 16:42:04",
    },
    {
      equipmentName: "SMART BOARD",
      startDate: "2024-11-04",
      endDate: "2024-11-10",
      operationalHours: 140,
      quantity: 1,
      timestamp: "2024-11-30 14:54:36",
    },
    {
      equipmentName: "Server A",
      startDate: "2024-11-01",
      endDate: "2024-11-30",
      operationalHours: 480,
      quantity: 2,
      timestamp: "2024-11-27 16:42:04",
    },
  ]);

  const filterLogs = () => {
    const filteredLogs = logs.filter((log) => {
      const logStart = new Date(log.startDate);
      const logEnd = new Date(log.endDate);
      const filterStart = startDate ? new Date(startDate) : null;
      const filterEnd = endDate ? new Date(endDate) : null;

      return (
        (!filterStart || logStart >= filterStart) &&
        (!filterEnd || logEnd <= filterEnd)
      );
    });
    setLogs(filteredLogs);
  };

  return (
    <div className="container">
      <h2>View All Equipment Logs</h2>
      <div className="filters">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className="view-button" onClick={filterLogs}>
          View Logs
        </button>
      </div>

      <table className="logs-table">
        <thead>
          <tr>
            <th>Equipment Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Operational Hours</th>
            <th>Quantity</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.equipmentName}</td>
              <td>{log.startDate}</td>
              <td>{log.endDate}</td>
              <td>{log.operationalHours}</td>
              <td>{log.quantity}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLogs;
