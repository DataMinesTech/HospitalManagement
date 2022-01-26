import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button>Appointment</button>
      <button>Patient Registration</button>
      <button>Clinical Management</button>
      <button>Emergency</button>
      <button>Procedure Room </button>
      <button>Operation Theatre</button>
      <button> In-Patient Management</button>
      <button> Nurse Station</button>
      <button>Billing and collection</button>
      <button>Insuarance and E claim</button>
      <br />
      <button>PHLEBOTOMY</button>
      <button>Laboratory</button>
      <button>Blood Bank</button>
      <button>Radiology</button>
      <button>Linen and laundry</button>
      <button>Discharge summary</button>
      <button>Mortuary Management</button>
      <button>Feedback Management</button>
      <Link to="/inventory">
        <button>Inventory</button>
      </Link>
      <button>MRD</button>
      <br />
      <button>MIS Dashboard</button>
      <button>MIS Reports </button>
      <button>Inventory Setup</button>
      <button>Custom Template</button>
      <button>Software Management</button>
      <button>CSSD</button>
      <button>System Control</button>
      <button>Security and Audit</button>
      <button>HR Management</button>
      <button>Ambulance Management</button>
      <br />
      <button>Lab Setup</button>
    </div>
  );
};

export default Dashboard;
