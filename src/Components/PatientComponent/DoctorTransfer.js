import React from "react";

const DoctorTransfer = () => {
  return (
    <div>
      <h1>Doctor Transfer </h1>
      <label>Admission No</label>
      <input type="text" />

      <h2>Doctor Transfer</h2>

      <label>Transfer Date</label>
      <input type="date" />
      <label>Admission Visit</label>
      <select>
        <option>Select</option>
        <option>Admission Visit</option>
      </select>

      <label>Clinic Department</label>
      <select>
        <option>Select</option>
        <option>Admission Unit</option>
      </select>

      <label>Doctor</label>
      <select>
        <option>Select</option>
        <option>Admission Visit</option>
      </select>
      <label>Reason for doctor transfer</label>
      <select>
        <option>Select</option>
        <option>some reason</option>
      </select>
    </div>
  );
};

export default DoctorTransfer;
