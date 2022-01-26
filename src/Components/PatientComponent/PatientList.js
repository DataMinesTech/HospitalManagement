import React from "react";

const PatientList = () => {
  return (
    <div>
      <h1>Patient List</h1>
      <label>Search By </label>
      <select>
        <option>Ward</option>
      </select>
      <label>Ward:</label>
      <select>
        <option>All</option>
      </select>
      <label>Doctor</label>
      <select>
        <option>Select</option>
      </select>
      <label>Payer</label>
      <select>
        <option>select</option>
      </select>
      <label>Search by filter</label>
      <select>
        <option>UHID</option>
      </select>
      <input type="text" />
    </div>
  );
};

export default PatientList;
