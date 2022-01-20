import React from "react";

const ReferToDoctor = () => {
  return (
    <div>
      <h2>Refer to Doctor</h2>
      <label>Specialty</label>
      <select>
        <option>Radiologist</option>
        <option>Pediatrician</option>
        <option>OB-GYN Specialist</option>
        <option>Internist </option>
        <option>General Medicine </option>
        <option>Clinic </option>
      </select>
      <label>Doctor</label>
      <select>
        <option>Select</option>
      </select>
      <br />
      <label>Remarks</label>
      <textarea />
    </div>
  );
};

export default ReferToDoctor;
