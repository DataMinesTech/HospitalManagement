import { Divider } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../../Helpers/DatagridMockData";

const OutPatientMedicineDispense = () => {
  return (
    <div>
      <div>
        <p className="h3">Medicine Dispense</p>
        <Divider />
        <div className="d-flex justify-content-evenly">
          <div>
            <label>UHID</label>
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
          <div>
            <label>Status</label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>
              <option>All</option>
            </select>
          </div>
          <div>
            <label>Patient Name</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
      </div>
      <div className=" justify-content-center" style={{ height: 400 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default OutPatientMedicineDispense;
