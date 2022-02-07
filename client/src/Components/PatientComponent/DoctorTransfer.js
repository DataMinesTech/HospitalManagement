import React from "react";

const DoctorTransfer = () => {
  return (
    <div>
      <p className="h2">Doctor Transfer </p>
      <div
        className="d-flex justify-content-evenly
      "
      >
        <div>
          <label>Admission No</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <div>
          <label>Transfer Date</label>
          <input
            type="date"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
      <label>Admission Visit</label>
      <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
        <option>Select</option>
        <option>Admission Visit</option>
      </select>

      <label>Clinic Department</label>
      <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
        <option>Select</option>
        <option>Admission Unit</option>
      </select>

      <label>Doctor</label>
      <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
        <option>Select</option>
        <option>Admission Visit</option>
      </select>
      <label>Reason for doctor transfer</label>
      <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
        <option>Select</option>
        <option>some reason</option>
      </select>
    </div>
  );
};

export default DoctorTransfer;
