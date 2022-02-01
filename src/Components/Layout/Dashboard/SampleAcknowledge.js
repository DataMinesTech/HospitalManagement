import { Divider } from "@mui/material";
import React from "react";

const SampleAcknowledge = () => {
  return (
    <div>
      <h2>Sample Acknowledge </h2>
      <Divider />
      <div className="d-flex pt-2  justify-content-evenly">
        <div>
          <input type="radio" />
          <label>All</label>
        </div>
        <div>
          <input type="radio" />
          <label>Out-Patient</label>
        </div>
        <div>
          <input type="radio" />
          <label>In Patient </label>
        </div>
        <div>
          <input type="radio" />
          <label>Emergency</label>
        </div>
      </div>
      <br />
      <div>
        <label>Stat</label>
      </div>
      <div>
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Search by</label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>
              <option>Lab No</option>
            </select>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>From Date</label>
            <input
              type="date"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>To Date</label>
            <input
              type="date"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Hospital</label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Silver Hills Hospitals</option>
              <option>Other Hospitals</option>
            </select>
          </div>
          <div>
            <label>Sub Department </label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Collected</option>
              <option>Not Collected</option>
            </select>
          </div>
          <div>
            <label>Order Type</label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>
              <option>All</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleAcknowledge;
