import React from "react";

const Diagnosis = () => {
  return (
    <div>
      <h2>Diagnosis</h2>
      <label>Attendance</label>
      <select>
        <option>Select</option>
        <option>Emergency/Acute</option>
      </select>
      <label>Type</label>
      <select>
        <option>Select</option>
        <option>Provisional</option>
      </select>
      <label>Category</label>
      <select>
        <option>Select</option>
        <option>Primary</option>
      </select>
      <br />
      <label>Diagnosis</label>
      <input type="text" />
      <label>Country Code</label>
      <input type="text" />
      <label>ICD 10</label>
      <input type="text" />
      <label>Remarks</label>
      <input type="text" />
    </div>
  );
};

export default Diagnosis;
