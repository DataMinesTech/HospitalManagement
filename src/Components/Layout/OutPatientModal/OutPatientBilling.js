import React from "react";

const OutPatientBilling = () => {
  return (
    <div>
      <h2>Out-Patient Billing</h2>
      <label>UHID</label>
      <input type="text" />

      <label>Visit No</label>
      <select>
        <option>Select</option>
        <option>OutPatient Clinic</option>
      </select>
      <input type="checkbox" />
      <label>Export Bill</label>

      <button>Pending Orders</button>
      <button>Services</button>
      <button>Advance</button>

      <br />
      <h3>John Smith</h3>
      <span>payer std,sponsor : std ,Network:</span>
      <br />
      <span>Male 34 years</span>
      <span>Mobile no</span>
      <label>Referral</label>
      <input type="text" />
      <br />
    </div>
  );
};

export default OutPatientBilling;
