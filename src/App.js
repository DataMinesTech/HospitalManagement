import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import NewPatient from "./Components/PatientComponent/NewPatient";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Header from "./Components/Layout/Header/Header";
import PatientVisit from "./Components/PatientComponent/PatientVisit";
import PatientAllergies from "./Components/PatientComponent/PatientAllergies";
import PresentingComplaint from "./Components/PatientComponent/PresentingComplaint";
import Medication from "./Components/PatientComponent/Medication";
import Diagnosis from "./Components/PatientComponent/Diagnosis";
import HistoryAndExam from "./Components/PatientComponent/HistoryAndExam";
import InvestigationProcedure from "./Components/PatientComponent/InvestigationProcedure";
import PrescriptionMedicine from "./Components/PatientComponent/PrescriptionMedicine";
import Advice from "./Components/PatientComponent/Advice";
import MedicalCertificate from "./Components/PatientComponent/MedicalCertificate";
import ReferToDoctor from "./Components/PatientComponent/ReferToDoctor";
import Dashboard from "./Components/Layout/Dashboard/Dashboard";
import Inventory from "./Components/Layout/Dashboard/Inventory";
import PatientIssue from "./Components/Layout/Dashboard/PatientIssue";
import OutPatientMedicineDispense from "./Components/Layout/OutPatientModal/OutPatientMedicineDispense";
import SampleCollection from "./Components/Layout/Dashboard/SampleCollection";
import InvestigationAcknowledge from "./Components/Layout/Dashboard/InvestigationAcknowledge";
import Result from "./Components/Layout/Dashboard/Result";
import SampleAcknowledge from "./Components/Layout/Dashboard/SampleAcknowledge";
import OutPatientBilling from "./Components/Layout/OutPatientModal/OutPatientBilling";
import PatientList from "./Components/PatientComponent/PatientList";
import RoomStatus from "./Components/PatientComponent/RoomStatus";
import RoomTransfer from "./Components/PatientComponent/RoomTransfer";
import DoctorTransfer from "./Components/PatientComponent/DoctorTransfer";
import PatientAdmission from "./Components/PatientComponent/PatientAdmission";
import PatientDischarge from "./Components/PatientComponent/PatientDischarge";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newpatient" component={NewPatient} />
        <Route exact path="/patientvisit" component={PatientVisit} />
        <Route exact path="/allergies" component={PatientAllergies} />
        <Route exact path="/complaint" component={PresentingComplaint} />
        <Route exact path="/medication" component={Medication} />
        <Route exact path="/diagnosis" component={Diagnosis} />
        <Route exact path="/historyandexam" component={HistoryAndExam} />
        <Route exact path="/investigation" component={InvestigationProcedure} />
        <Route exact path="/prescription" component={PrescriptionMedicine} />
        <Route exact path="/advice" component={Advice} />
        <Route
          exact
          path="/medicalcertificate"
          component={MedicalCertificate}
        />
        <Route exact path="/refertodoctor" component={ReferToDoctor} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/patientissue" component={PatientIssue} />
        <Route
          exact
          path="/medicinedispense"
          component={OutPatientMedicineDispense}
        />
        <Route exact path="/samplecollection" component={SampleCollection} />
        <Route exact path="/sampleacknowledge" component={SampleAcknowledge} />
        <Route exact path="/result" component={Result} />
        <Route
          exact
          path="/investigationacknowledge"
          component={InvestigationAcknowledge}
        />
        <Route exact path="/outpatientbilling" component={OutPatientBilling} />
        <Route exact path="/patientlist" component={PatientList} />
        <Route exact path="/roomstatus" component={RoomStatus} />
        <Route exact path="/roomtransfer" component={RoomTransfer} />
        <Route exact path="/doctortransfer" component={DoctorTransfer} />
        <Route exact path="/patientadmission" component={PatientAdmission} />
        <Route exact path="/patientdischarge" component={PatientDischarge} />
      </Switch>
    </Router>
  );
}

export default App;
