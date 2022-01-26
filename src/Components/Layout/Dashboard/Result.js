import React from "react";

const Result = () => {
  return (
    <div>
      <h2>Result </h2>
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
        <label>Sample Status </label>
        <select>
          <option>Collected</option>
          <option>Not Collected</option>
        </select>
        <label>Order Type</label>
        <select>
          <option>Select</option>
          <option>All</option>
        </select>
      </div>
    </div>
  );
};

export default Result;
