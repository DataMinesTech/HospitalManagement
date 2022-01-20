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

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
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
      </Switch>
    </Router>
  );
}

export default App;
