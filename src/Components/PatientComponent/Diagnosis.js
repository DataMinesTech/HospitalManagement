import { Divider } from "@mui/material";
import React from "react";

const Diagnosis = () => {
  return (
    <div>
      <p className="h3">Diagnosis</p>
      <Divider />
      <div className="d-flex justify-content-evenly">
        <div>
          <label>Attendance</label>

          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>Emergency/Acute</option>
          </select>
        </div>
        <div>
          <label>Type</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>Provisional</option>
          </select>
        </div>
        <div>
          <label>Category</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>Primary</option>
          </select>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-evenly">
        <label>Diagnosis</label>
        <input
          type="text"
          className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
        />
        <label>Country Code</label>
        <input
          type="text"
          className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
        />
        <label>ICD 10</label>
        <input
          type="text"
          className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
        />
        <label>Remarks</label>
        <input
          type="text"
          className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
        />
      </div>
    </div>
  );
};

export default Diagnosis;
