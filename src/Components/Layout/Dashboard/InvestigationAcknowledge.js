import React from "react";

const InvestigationAcknowledge = () => {
  return (
    <div>
      <h2 className="h2">Investigation Acknowledge </h2>
      <div className="d-flex justify-content-evenly">
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
      <div className=" d-flex justify-content-start">
        <label>Stats</label>
      </div>
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
          <label>Order Type</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>Lab No</option>
          </select>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestigationAcknowledge;
