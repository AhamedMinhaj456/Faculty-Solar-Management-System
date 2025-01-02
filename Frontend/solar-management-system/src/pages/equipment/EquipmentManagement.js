import React, { useState } from "react";
import "./EquipmentManagement.css";

const EquipmentManagement = () => {
  const [equipment, setEquipment] = useState({
    name: "",
    power: 0,
    room: "",
    floor: "Floor 1",
    priority: "non-Critical",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Equipment Data:", equipment);
    // Add your submission logic here
  };

  return (
    <div className="equipment-management-container">
      <div className="header">
        <h1>Equipment Management</h1>
        <button className="add-equipment-btn" >Add Equipment</button>
      </div>
      <form onSubmit={handleSubmit} className="equipment-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={equipment.name}
            onChange={handleChange}
            placeholder="Enter equipment name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="power">Power (Watts)</label>
          <input
            type="number"
            id="power"
            name="power"
            value={equipment.power}
            onChange={handleChange}
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="room">Room</label>
          <input
            type="text"
            id="room"
            name="room"
            value={equipment.room}
            onChange={handleChange}
            placeholder="Room"
          />
        </div>

        <div className="form-group">
          <label htmlFor="floor">Floor</label>
          <select
            id="floor"
            name="floor"
            value={equipment.floor}
            onChange={handleChange}
          >
            <option value="Floor 1">Floor 1</option>
            <option value="Floor 2">Floor 2</option>
            <option value="Floor 3">Floor 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={equipment.priority}
            onChange={handleChange}
          >
            <option value="non-Critical">non-Critical</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default EquipmentManagement;
