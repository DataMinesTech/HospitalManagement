import { Divider } from "@mui/material";
import React from "react";

const SampleCollection = () => {
  return (
    <div>
      <div>
        <h2>Sample Collection </h2>
        <Divider />

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <input type="radio" />
              <label>All</label>
            </div>
            <div className="col-sm">
              <input type="radio" />
              <label>Out-Patient</label>
            </div>
            <div className="col-sm">
              <input type="radio" />
              <label>In Patient </label>
            </div>
            <div className="col-sm">
              <input type="radio" />
              <label>Emergency</label>
            </div>
            <div className="col-sm">
              <input type="checkbox" />
              <label>Partial Samples Collected</label>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
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

            <div className="col-sm">
              <label>From Date</label>
              <input
                type="date"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
            <div className="col-sm">
              <label>To Date</label>
              <input
                type="date"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label>Hospital</label>
              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Silver Hills Hospitals</option>
                <option>Other Hospitals</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Sample Status </label>
              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Collected</option>
                <option>Not Collected</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Order Type</label>
              <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                <option>Select</option>
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCollection;
