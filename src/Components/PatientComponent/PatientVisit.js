import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { PatientSidebarData } from "../Layout/Sidebar/PatientSidebarData";
import "./PatientVisit.css";
import Header from "../Layout/Header/Header";
import MaterialDrawer from "../Layout/Sidebar/MaterialDrawer";
import { Link } from "react-router-dom";
import PatientAllergies from "./PatientAllergies";
import VitalSigns from "./VitalSigns";
import Medication from "./Medication";
import PatientVitals from "./PatientVitals";
import PresentingComplaint from "./PresentingComplaint";
import HistoryAndExam from "./HistoryAndExam";
import Diagnosis from "./Diagnosis";
import InvestigationAcknowledge from "../Layout/Dashboard/InvestigationAcknowledge";
import PrescriptionMedicine from "./PrescriptionMedicine";
import Advice from "./Advice";
import MedicalCertificate from "./MedicalCertificate";
import DoctorTransfer from "./DoctorTransfer";

const PatientVisit = () => {
  const currentRoute = window.location.pathname;

  console.log("current Route", currentRoute);
  console.log("hash location", window.location.hash);

  const [active, setActive] = useState("Vital Signs");

  return (
    <>
      <div className="d-flex bd-highlight ">
        <div className="flex-shrink-1 p-2 bd-highlight">
          <Sidebar setActive={setActive} />
        </div>
        <div className="w-100 p-2 bd-highlight">
          <div className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <h2>Patient Visits</h2>
            </div>
            <div className="ms-auto p-2 bd-highlight">
              <span>Patient Id : 5584133 &nbsp; </span>
              <span>Name : John Smith &nbsp;</span>
              <span>Age : 35 years &nbsp;</span>{" "}
            </div>
          </div>
          <div className=" " style={{ width: "100%" }}>
            <button>Medical Record</button>
            <button>Package</button>
            <button>Consultation</button>
            <button>Vaccination</button>{" "}
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-block btn-primary" type="submit">
              Save
            </button>
          </div>

          {active === "Vital Signs" && <PatientVitals />}
          {active === "Allergies" && <PatientAllergies />}
          {active === "Current Medication" && <Medication />}
          {active === "Presenting Complaint" && <PresentingComplaint />}
          {active === "History and Examination" && <HistoryAndExam />}
          {active === "Diagnosis" && <Diagnosis />}
          {active === "Investigation Procedure" && <InvestigationAcknowledge />}
          {active === "Prescription Medicine" && <PrescriptionMedicine />}
          {active === "Advice" && <Advice />}
          {active === "Medical Certificate" && <MedicalCertificate />}
          {active === "Refer to Doctor" && <DoctorTransfer />}
        </div>
      </div>
    </>
  );
};

export default PatientVisit;
