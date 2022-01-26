import React from "react";

const InvestigationAcknowledge = () => {
  return (
    <div>
      <h2>Investigation Acknowledge </h2>
      <input type="radio" />
      <label>All</label>
      <input type="radio" />
      <label>Out-Patient</label>
      <input type="radio" />
      <label>In Patient </label>
      <input type="radio" />
      <label>Emergency</label>
      <div>
        <label>Stat</label>
      </div>
      <div>
        <label>Search by</label>
        <select>
          <option>Select</option>
          <option>Lab No</option>
        </select>
        <input type="text" />
      </div>
      <label>Order Type</label>
      <select>
        <option>Select</option>
        <option>Lab No</option>
      </select>
      <input type="text" />
    </div>
  );
};

export default InvestigationAcknowledge;
