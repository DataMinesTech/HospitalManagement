import React from "react";

const OutPatientMedicineDispense = () => {
  return (
    <div>
      <label>UHID</label>
      <input type="text" />

      <label>From Date</label>
      <input type="date " />

      <label>To Date</label>
      <input type="date" />
      <label>Status</label>
      <select>
        <option>Select</option>
        <option>All</option>
      </select>
      <label>Patient Name</label>
      <input type="text" />
    </div>
  );
};

export default OutPatientMedicineDispense;
